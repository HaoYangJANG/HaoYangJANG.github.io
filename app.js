(() => {
  'use strict';
  const data = window.RESUME_DATA;
  if (!data) return;
  const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const icon = name => '<svg class="icon" aria-hidden="true"><use href="#i-' + escapeHtml(name) + '"/></svg>';
  const tags = values => '<div class="tags">' + values.map(value => '<span class="tag">' + escapeHtml(value) + '</span>').join('') + '</div>';
  const pipelines = project => (project.pipelineGroups || [{steps:project.pipeline}]).map(group =>
    '<div class="dialog-pipeline-group">' + (group.title ? '<h4>' + escapeHtml(group.title) + '</h4>' : '') + '<div class="dialog-pipeline">' + group.steps.map(stage => '<span>' + escapeHtml(stage) + '</span>').join('') + '</div></div>'
  ).join('');
  const projectResults = project => project.resultHighlights ? '<h3>量化结果</h3><dl class="dialog-results">' + project.resultHighlights.map(result => '<div><dt>' + escapeHtml(result.label) + '</dt><dd><strong>' + escapeHtml(result.value) + '</strong><p>' + escapeHtml(result.detail) + '</p></dd></div>').join('') + '</dl>' : '';
  const projectFuture = project => project.futureDirections ? '<details class="dialog-future"><summary><span>思考与后续优化</span><span class="dialog-future-status">拟验证</span>' + icon('plus') + '</summary><div class="dialog-future-body"><p class="dialog-future-intro">' + escapeHtml(project.futureIntro) + '</p><ol>' + project.futureDirections.map(direction => '<li><h4>' + escapeHtml(direction.title) + '</h4><p>' + escapeHtml(direction.text) + '</p></li>').join('') + '</ol>' + (project.futureEvaluation ? '<p class="dialog-future-evaluation">' + escapeHtml(project.futureEvaluation) + '</p>' : '') + '</div></details>' : '';
  const profile = data.profile;
  const phoneText = profile.phone.replace(/^(\d{3})(\d{4})(\d{4})$/, '$1 $2 $3');
  document.title = profile.name + ' · ' + profile.role;
  document.querySelectorAll('[data-profile]').forEach(element => {
    element.textContent = element.dataset.profile === 'phone' ? phoneText : profile[element.dataset.profile] || '';
  });
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => { link.href = 'mailto:' + profile.email; });
  document.querySelectorAll('a[href^="tel:"]').forEach(link => { link.href = 'tel:+86' + profile.phone; });
  const ageText = profile.age ? '今年 ' + escapeHtml(profile.age) + ' 岁。' : '';
  const graduationText = profile.expectedGraduation ? '，<span class="education-graduation">预计 ' + escapeHtml(profile.expectedGraduation) + ' 毕业</span>' : '';
  document.querySelector('.about-lead').innerHTML = '<span>你好，我是' + escapeHtml(profile.name) + '。' + ageText + '</span><br>就读于' + escapeHtml(profile.school) + '，' + escapeHtml(profile.major) + '专业' + escapeHtml(profile.degree) + '，<br class="desktop-break">' + escapeHtml(profile.enrollment) + graduationText + '。' + (profile.undergraduate ? '<br>本科就读于' + escapeHtml(profile.undergraduate.school) + '，' + escapeHtml(profile.undergraduate.major) + '专业，' + escapeHtml(profile.undergraduate.period) + '。' : '');
  document.getElementById('profile-summary').textContent = profile.summary;
  const stats = [[data.experiences.length, '段'],[data.projects.length,'个'],[data.publications.length,'项']];
  document.querySelectorAll('.profile-numbers dt').forEach((element,index) => {
    element.innerHTML = stats[index][0] + '<span>' + stats[index][1] + '</span>';
  });

  document.getElementById('skills-grid').innerHTML = data.skills.map(skill =>
    '<article class="skill-card"><h3><span class="skill-icon">' + icon(skill.icon) + '</span>' + escapeHtml(skill.title) + '</h3><p>' + escapeHtml(skill.description) + '</p>' + tags(skill.tags) + '</article>'
  ).join('');
  document.getElementById('certificates').innerHTML = data.certificates.map(value => '<span>' + escapeHtml(value) + '</span>').join('');
  document.getElementById('experience-list').innerHTML = data.experiences.map((experience,index) =>
    '<details class="experience-item"' + (index === 0 ? ' open' : '') + '><summary><div class="experience-company"><h3>' + escapeHtml(experience.company) + (experience.badge ? '<span class="experience-badge">' + escapeHtml(experience.badge) + '</span>' : '') + '</h3><span>' + escapeHtml(experience.role) + '</span></div>' + (experience.period ? '<span class="experience-period">' + escapeHtml(experience.period) + '</span>' : '') + icon('plus') + '</summary><div class="experience-body"><p>' + escapeHtml(experience.summary) + '</p><ul>' + experience.bullets.map(value => '<li>' + escapeHtml(value) + '</li>').join('') + '</ul>' + tags(experience.tags) + '</div></details>'
  ).join('');
  document.getElementById('projects-grid').innerHTML = data.projects.map(project =>
    '<article class="project-card"><button class="project-open" data-project="' + escapeHtml(project.id) + '" aria-label="查看项目：' + escapeHtml(project.title) + '"><span class="project-cover"><img src="assets/project-' + escapeHtml(project.id) + '.svg" width="800" height="600" alt="' + escapeHtml(project.category) + '项目概念封面" loading="lazy"><span class="project-cover-arrow">' + icon('arrow') + '</span></span><span class="project-category">' + escapeHtml(project.category) + '</span><span class="project-title">' + escapeHtml(project.title) + '</span>' + (project.metric ? '<span class="project-metric"><strong>' + escapeHtml(project.metric.value) + '</strong> · ' + escapeHtml(project.metric.label) + '</span>' : '') + '</button></article>'
  ).join('');

  const dialog = document.getElementById('project-dialog');
  let projectTrigger = null;
  const openProject = (id, trigger) => {
    const project = data.projects.find(item => item.id === id);
    if (!project) return;
    projectTrigger = trigger;
    document.getElementById('project-dialog-content').innerHTML =
      '<img class="dialog-cover" src="assets/project-' + escapeHtml(project.id) + '.svg" alt="' + escapeHtml(project.category) + '项目概念封面">' +
      '<div class="dialog-content"><p class="dialog-category">' + escapeHtml(project.category) + '</p><h2 id="project-dialog-title">' + escapeHtml(project.title) + '</h2><p class="dialog-summary">' + escapeHtml(project.summary) + '</p>' + tags(project.stack) +
      (project.metric ? '<div class="dialog-metric"><strong>' + escapeHtml(project.metric.value) + '</strong><span>' + escapeHtml(project.metric.label) + '</span></div>' : '') +
      '<h3>技术路线</h3>' + pipelines(project) + '<h3>' + escapeHtml(project.detailsHeading || '具体工作') + '</h3><ul>' + project.bullets.map(value => '<li>' + escapeHtml(value) + '</li>').join('') + '</ul>' + projectResults(project) + projectFuture(project) + '</div>';
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    dialog.scrollTop = 0;
  };
  document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.project, button)));
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = '';
    if (projectTrigger && document.contains(projectTrigger)) projectTrigger.focus({preventScroll:true});
  });

  const header = document.getElementById('site-header');
  const menu = document.querySelector('.menu-toggle');
  const closeMenu = () => {
    header.classList.remove('menu-open');
    menu.setAttribute('aria-expanded','false');
    menu.setAttribute('aria-label','展开导航');
  };
  menu.addEventListener('click', () => {
    const open = header.classList.toggle('menu-open');
    menu.setAttribute('aria-expanded',String(open));
    menu.setAttribute('aria-label',open ? '收起导航' : '展开导航');
  });
  document.addEventListener('click', event => { if (!header.contains(event.target)) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  const navLinks = [...document.querySelectorAll('.nav-link')];
  navLinks.forEach(link => link.addEventListener('click',closeMenu));
  const sections = [...document.querySelectorAll('main > section[id]')];
  const updateNavigation = () => {
    let current = 'intro';
    sections.forEach(section => {
      if (section.getBoundingClientRect().top <= 135) current = section.id === 'about' ? 'intro' : section.id;
    });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 30) current = 'contact';
    navLinks.forEach(link => {
      const active = link.hash === '#' + current;
      link.classList.toggle('is-active',active);
      if (active) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current');
    });
    header.classList.toggle('is-scrolled',window.scrollY > 20);
  };
  let scrollPending = false;
  window.addEventListener('scroll',() => {
    if (scrollPending) return;
    scrollPending = true;
    requestAnimationFrame(() => { updateNavigation(); scrollPending = false; });
  },{passive:true});
  window.addEventListener('resize',() => { if (innerWidth > 680) closeMenu(); updateNavigation(); });
  updateNavigation();

  let toastTimeout;
  const toast = document.getElementById('toast');
  const showToast = text => {
    toast.textContent = text; toast.classList.add('is-visible'); clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('is-visible'),2300);
  };
  const copy = async text => {
    if (navigator.clipboard && window.isSecureContext) {
      try { await navigator.clipboard.writeText(text); return true; } catch { /* Use the local-compatible fallback below. */ }
    }
    const element = document.createElement('textarea');
    element.value = text; element.style.cssText = 'position:fixed;left:-9999px;top:0';
    document.body.append(element); element.select();
    let success = false;
    try { success = document.execCommand('copy'); } finally { element.remove(); }
    return success;
  };
  document.querySelectorAll('[data-copy-kind]').forEach(button => button.addEventListener('click',async () => {
    const email = button.dataset.copyKind === 'email';
    try { showToast(await copy(email ? profile.email : profile.phone) ? (email ? '邮箱已复制' : '电话已复制') : '请选中联系方式复制'); }
    catch { showToast('请选中联系方式复制'); }
  }));
  document.querySelectorAll('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });

  const tourTrack = document.querySelector('.tour-track');
  if (tourTrack?.animate) {
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const duration = 12000;
    const animation = tourTrack.animate([
      { transform:'translateY(0)', offset:0 },
      { transform:'translateY(0)', offset:2/12, easing:'cubic-bezier(.45,0,.55,1)' },
      { transform:'translateY(-50%)', offset:3.5/12 },
      { transform:'translateY(-50%)', offset:8.5/12, easing:'cubic-bezier(.45,0,.55,1)' },
      { transform:'translateY(0)', offset:10/12 },
      { transform:'translateY(0)', offset:1 }
    ], { duration, iterations:Infinity });
    animation.pause();
    let visible = false;
    const syncTour = () => {
      const playing = visible && !document.hidden && !motion.matches;
      if (playing) {
        animation.play();
      } else {
        animation.pause();
      }
    };
    document.addEventListener('visibilitychange', syncTour);
    motion.addEventListener('change', syncTour);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting && entries[0].intersectionRatio >= 0.1;
        syncTour();
      }, { threshold: [0,0.1] }).observe(tourTrack.parentElement);
    } else {
      visible = true;
      syncTour();
    }
  }
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-enter'); observer.unobserve(entry.target);
        }
      });
    },{threshold:0.08});
    document.querySelectorAll('.section-heading,.skill-card,.project-card').forEach(element => observer.observe(element));
  }
})();
