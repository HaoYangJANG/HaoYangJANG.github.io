(() => {
  'use strict';
  const papers = window.RESUME_DATA?.publications || [];
  const container = document.getElementById('publications-list');
  if (!container || !papers.length) return;
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const safeLinks = links => (links || []).filter(link => {
    try { return ['https:','http:'].includes(new URL(link.url).protocol); } catch { return false; }
  });
  container.innerHTML = papers.map(paper => {
    const links = safeLinks(paper.links);
    return '<article class="publication-card" id="publication-' + escape(paper.id) + '">' +
      '<div class="publication-topline">' +
      (paper.venue || paper.status ? '<span class="publication-status">' + [paper.venue,paper.status].filter(Boolean).map(escape).join(' · ') + '</span>' : '') + '</div>' +
      '<h3>' + escape(paper.title) + '</h3><p class="publication-subtitle">' + escape(paper.subtitle) + '</p>' +
      (paper.authors?.length ? '<p class="publication-authors">' + paper.authors.map(escape).join('，') + '</p>' : '') +
      '<p class="publication-summary">' + escape(paper.summary) + '</p>' +
      '<div class="tags publication-tags">' + paper.tags.map(tag => '<span class="tag">' + escape(tag) + '</span>').join('') + '</div>' +
      '<dl class="publication-highlights">' + paper.highlights.map(item => '<div><dt>' + escape(item.value) + '</dt><dd>' + escape(item.label) + '<span>' + escape(item.detail) + '</span></dd></div>').join('') + '</dl>' +
      '<details class="publication-details"><summary>' + escape(paper.detailsLabel || '研究方法与完整实验结果') + '<svg class="icon" aria-hidden="true"><use href="#i-plus"/></svg></summary><div class="publication-detail-body">' +
      '<h4>方法与数据</h4><ol class="publication-methods">' + paper.contributions.map(item => '<li><h5>' + escape(item.title) + '</h5><p>' + escape(item.text) + '</p></li>').join('') + '</ol>' +
      '<h4>训练路线</h4><div class="publication-route">' + paper.trainingRoute.map(stage => '<span>' + escape(stage) + '</span>').join('') + '</div>' +
      '<h4>实验结果</h4><div class="publication-table-wrap" tabindex="0" role="region" aria-label="' + escape(paper.title) + ' 实验结果，可横向滚动"><table class="publication-results"><caption>' + escape(paper.resultsCaption || paper.title + '：不同模型与数据集的结果') + '</caption><thead><tr><th scope="col">模型</th><th scope="col">数据集</th><th scope="col">指标</th><th scope="col">结果</th></tr></thead><tbody>' +
      paper.results.map(result => '<tr><th scope="row">' + escape(result.model) + '</th><td>' + escape(result.dataset) + '</td><td>' + escape(result.metric) + '</td><td><strong>' + escape(result.value) + '</strong>' + (result.comparison ? '<span class="result-comparison">' + escape(result.comparison) + '</span>' : '') + '</td></tr>').join('') + '</tbody></table></div>' +
      (paper.resultsNote ? '<p class="publication-results-note">' + escape(paper.resultsNote) + '</p>' : '') + '<p class="publication-table-hint">小屏幕下可横向滑动查看完整结果。</p></div></details>' +
      (links.length ? '<div class="publication-links">' + links.map(link => '<a class="button secondary" href="' + escape(link.url) + '" target="_blank" rel="noopener noreferrer">' + escape(link.label) + '</a>').join('') + '</div>' : '') + '</article>';
  }).join('');
})();
