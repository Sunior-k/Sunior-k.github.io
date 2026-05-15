'use strict';

// ============================================================
// TRANSLATIONS
// ============================================================
const translations = {
  en: {
    'sidebar-btn-open':   'Show Contacts',
    'sidebar-btn-close':  'Hide Contacts',
    'contact-email':      'Email',
    'contact-specialty':  'Specialty',
    'contact-experience': 'Experience',
    'contact-exp-value':  'Entry Level · 2025',
    'contact-location':   'Location',
    'contact-location-value': 'Seoul, South Korea',

    'about-title': 'About Me',
    'about-p1': 'I build Android apps with Kotlin and Jetpack Compose. I care more about <strong>why a structure was chosen</strong> and <strong>how it holds up in production</strong> than about shipping features quickly.',
    'about-p2': 'I enjoy working through hard problems — <strong>JWT concurrency bugs, BLE GATT communication, Compose state management</strong>. Currently deepening my knowledge in Android architecture and performance.',
    'doing-title': "What I'm Doing",
    'service-android':     'Building Android apps with Kotlin + Jetpack Compose. I prefer MVW — picking MVVM or MVI based on the screen\'s complexity and state flow rather than sticking to one pattern.',
    'service-arch':        'Clean Architecture + Multi-Module for clear module boundaries. Code reviews and conventions to keep the team consistent as the codebase grows.',
    'service-ble':         'Implemented BLE GATT communication, binary protocol parsing, and HUD device integration. In production, built a real-time HUD transmission system using live driving data.',
    'service-reliability': 'Handled real production problems — Mutex-based JWT token synchronization, Crashlytics crash monitoring, and network edge case handling.',

    'resume-title':   'Resume',
    'edu-heading':    'Education',
    'edu-school':     'Kangnam University',

    'edu-text':       'B.S. in Software Application. Graduated February 2025.',
    'exp-heading':    'Experience',
    'exp-tmap':       'Built BLE GATT communication between the Android app and HUD devices in a production environment. Handled binary protocol conversion for driving data, and designed the write queue, ACK flow, MTU negotiation, and reconnect logic.',
    'exp-yapp-title': 'YAPP 25th — Android Part',
    'exp-yapp':       'Joined YAPP 25th, an IT club for students and professionals. Led Orbit, an AI-based daily fortune alarm app, from planning to launch. Won 1st place at the YAPP 25th demo day.',
    'exp-clody':      "Led Android development on an AI gratitude diary app. Fixed a JWT auth concurrency bug that had been causing silent failures, set up Crashlytics monitoring, and reworked the team's PR process.",
    'exp-sopt-title': 'SOPT 34th — Android Part',
    'exp-sopt':       'Joined SOPT 34th, a university startup IT club. Worked on the Kakao Pay redesign project and led Android development for Clody, an AI gratitude diary service.',
    'skills-heading': 'Core Skills',

    'portfolio-title': 'Portfolio',
    'writing-title':   'Writing',

    'blog-1-date':   'May 2025',
    'blog-1-title':  'Kotlin: Async Streams with Flow',
    'blog-1-text':   'What Flow is as an async stream, how it works under the hood, and when to reach for it.',
    'blog-2-date':   'April 2025',
    'blog-2-title':  'Is Random() Really Random?',
    'blog-2-text':   'How pseudo-random number generators work and what "random" actually means in Kotlin.',
    'blog-3-date':   'April 2025',
    'blog-3-title':  'Android: Exploring Kotest #2',
    'blog-3-text':   'BehaviorSpec, DescribeSpec, and other Kotest testing styles explored in depth.',
    'blog-4-date':   'April 2025',
    'blog-4-title':  'Android: Exploring Kotest #1',
    'blog-4-text':   'Setting up Kotest in an Android project and writing the first tests.',
    'blog-5-date':   'March 2025',
    'blog-5-title':  'Android GitHub Actions CI/CD Guide',
    'blog-5-text':   'A step-by-step guide to setting up CI/CD for Android projects with GitHub Actions.',
    'blog-6-date':   'March 2025',
    'blog-6-title':  'Android: ViewBinding & DataBinding',
    'blog-6-text':   'Comparing ViewBinding and DataBinding — differences and when to use each in practice.',
    'blog-7-date':   'March 2025',
    'blog-7-title':  'Mastering Kotlin Data Class',
    'blog-7-text':   'componentN, copy, equals/hashCode and the common pitfalls of Kotlin data classes.',
    'blog-8-date':   'March 2025',
    'blog-8-title':  'DI in Android: Hilt & Koin (Hilt Deep Dive)',
    'blog-8-text':   'Comparing Hilt and Koin, then going deep into how Hilt works internally.',
    'blog-9-date':   'March 2025',
    'blog-9-title':  'Cold Stream & Hot Stream — Concepts Explained',
    'blog-9-text':   'The difference between cold and hot streams, and when to pick Flow vs SharedFlow vs StateFlow.',
    'blog-10-date':  'November 2024',
    'blog-10-title': 'Kotlin Code Convention (~Formatting)',
    'blog-10-text':  'A summary of Kotlin official coding conventions and formatting best practices.',
    'blog-11-date':  'October 2024',
    'blog-11-title': 'Observer Pattern',
    'blog-11-text':  'The Observer pattern concept and how it applies to Android event-driven architecture.',
    'blog-12-date':  'October 2024',
    'blog-12-title': 'Sealed Class vs Enum Class',
    'blog-12-text':  'When to choose sealed class over enum class in Kotlin — key differences and practical use cases.',
    'blog-13-date':  'October 2024',
    'blog-13-title': 'Kotlin Scope Functions',
    'blog-13-text':  'A practical guide to let, run, with, apply, and also — when to reach for each one.',

    'contact-title':     'Contact',
    'ci-email':          'Email',
    'ci-location':       'Location',
    'ci-location-value': 'Seoul, South Korea',
    'form-title':        'Get in Touch',
    'contact-desc':      'Feel free to reach out — I\'ll get back to you as soon as possible.',
    'form-btn':          'Send Email',
  },
  ko: {
    'sidebar-btn-open':   '연락처 보기',
    'sidebar-btn-close':  '연락처 닫기',
    'contact-email':      '이메일',
    'contact-specialty':  '전문 분야',
    'contact-experience': '경력',
    'contact-exp-value':  '신입 · 2025',
    'contact-location':   '위치',
    'contact-location-value': '서울, 대한민국',

    'about-title': 'About Me',
    'about-p1': 'Kotlin과 Jetpack Compose로 Android 앱을 만들고 있습니다. 기능 구현 자체보다 <strong>왜 이 구조를 선택했는지</strong>, <strong>운영 환경에서 실제로 어떻게 동작하는지</strong>를 더 중요하게 생각합니다.',
    'about-p2': '<strong>인증 동시성 버그, BLE GATT 통신 설계, Compose 상태 관리</strong>처럼 복잡한 문제를 파고들 때 가장 재미있고, 지금은 아키텍처와 성능 최적화 쪽을 계속 공부하고 있습니다.',
    'doing-title': 'What I\'m Doing',
    'service-android':     'Kotlin + Jetpack Compose로 Android 앱을 개발합니다. 화면 복잡도와 상태 흐름에 따라 패턴을 고르는 MVW 방식을 선호하고, 예측 가능한 UI 상태 관리를 우선합니다.',
    'service-arch':        'Clean Architecture + Multi-Module로 모듈 경계를 잡고, 코드 리뷰와 컨벤션으로 팀 일관성을 유지합니다.',
    'service-ble':         'BLE GATT 통신, Binary Protocol 파싱, HUD 디바이스 연동을 구현했습니다. 실무 환경에서 실제 주행 데이터를 실시간으로 HUD에 전송하는 시스템을 개발했습니다.',
    'service-reliability': 'Mutex 기반 JWT 토큰 동기화, Crashlytics 크래시 모니터링 등 운영 환경에서 실제로 발생한 문제들을 다뤄왔습니다.',

    'resume-title':   'Resume',
    'edu-heading':    'Education',
    'edu-school':     '강남대학교',

    'edu-text':       '소프트웨어응용학부 졸업',
    'exp-heading':    'Experience',
    'exp-tmap':       '실무 환경에서 HUD 디바이스와 Android 앱 간 BLE GATT 통신을 구현했습니다. 실제 주행 데이터를 binary protocol로 변환해 전송하고, write queue · ACK · MTU 협상 · reconnect 로직을 직접 설계했습니다.',
    'exp-yapp-title': 'YAPP 25기 — Android Part',
    'exp-yapp':       '직장인·대학생 연합 IT 동아리 YAPP 25기 안드로이드 파트에 참여. Orbit(AI 하루 운세 기반 기상알람) 안드로이드 개발에 참여하여 YAPP 25기 최종 발표에서 대상(1위) 수상.',
    'exp-clody':      'AI 감사 일기 서비스의 Android 리드를 맡았습니다. 조용히 실패하던 JWT 인증 동시성 버그를 잡고, Crashlytics 모니터링을 구축했으며, 팀 PR 프로세스도 정비했습니다.',
    'exp-sopt-title': 'SOPT 34기 — Android Part',
    'exp-sopt':       '대학생 IT 창업 동아리 SOPT 34기 안드로이드 파트에 참여. 카카오페이 리디자인 프로젝트와 클로디 Android 리드 개발자로 활동.',
    'skills-heading': 'Core Skills',

    'portfolio-title': 'Portfolio',
    'writing-title':   'Writing',

    'blog-1-date':   '2025년 5월',
    'blog-1-title':  'Kotlin: 비동기 스트림을 알고 계신가요?',
    'blog-1-text':   'Flow가 비동기 스트림으로서 어떻게 동작하는지, 언제 써야 하는지 정리했습니다.',
    'blog-2-date':   '2025년 4월',
    'blog-2-title':  'Random 함수는 진짜 "Random"할까?',
    'blog-2-text':   '의사 난수 생성기의 동작 원리와 Kotlin에서 Random이 실제로 무엇을 의미하는지 살펴봤습니다.',
    'blog-3-date':   '2025년 4월',
    'blog-3-title':  'Android: Kotest 알아보기 #2',
    'blog-3-text':   'BehaviorSpec, DescribeSpec 등 다양한 Kotest testing style을 깊이 살펴봤습니다.',
    'blog-4-date':   '2025년 4월',
    'blog-4-title':  'Android: Kotest 알아보기 #1',
    'blog-4-text':   'Android 프로젝트에 Kotest를 설정하고 첫 테스트를 작성하는 방법을 정리했습니다.',
    'blog-5-date':   '2025년 3월',
    'blog-5-title':  'Android GitHub Actions CI/CD 가이드',
    'blog-5-text':   'GitHub Actions로 Android 프로젝트 CI/CD를 구축하는 방법을 단계별로 정리했습니다.',
    'blog-6-date':   '2025년 3월',
    'blog-6-title':  'Android: ViewBinding & DataBinding',
    'blog-6-text':   'ViewBinding과 DataBinding의 차이점과 각각 언제 써야 하는지 비교했습니다.',
    'blog-7-date':   '2025년 3월',
    'blog-7-title':  'Kotlin Data Class 정복하기',
    'blog-7-text':   'componentN, copy, equals/hashCode 등 data class의 모든 것과 흔한 실수들을 정리했습니다.',
    'blog-8-date':   '2025년 3월',
    'blog-8-title':  '안드로이드에서의 DI: Hilt, Koin (feat. Hilt Deep Dive)',
    'blog-8-text':   'Hilt와 Koin을 비교하고, Hilt 내부 동작을 깊이 분석했습니다.',
    'blog-9-date':   '2025년 3월',
    'blog-9-title':  'Cold Stream & Hot Stream - 개념 정리',
    'blog-9-text':   'Cold/Hot Stream 차이와 Flow · SharedFlow · StateFlow를 언제 써야 하는지 비교했습니다.',
    'blog-10-date':  '2024년 11월',
    'blog-10-title': 'Kotlin Code Convention(~Formatting)',
    'blog-10-text':  'Kotlin 공식 코딩 컨벤션과 포맷팅 가이드라인을 정리했습니다.',
    'blog-11-date':  '2024년 10월',
    'blog-11-title': 'Observer Pattern',
    'blog-11-text':  '옵저버 패턴의 개념과 Android 이벤트 기반 아키텍처에서 어떻게 활용되는지 정리했습니다.',
    'blog-12-date':  '2024년 10월',
    'blog-12-title': 'Sealed Class Vs Enum Class',
    'blog-12-text':  'Kotlin에서 sealed class와 enum class를 언제 선택해야 하는지, 차이점과 사용 사례를 비교했습니다.',
    'blog-13-date':  '2024년 10월',
    'blog-13-title': 'Kotlin scope functions',
    'blog-13-text':  'let · run · with · apply · also — 각 스코프 함수를 언제 써야 하는지 실용적으로 정리했습니다.',

    'contact-title':     'Contact',
    'ci-email':          '이메일',
    'ci-location':       '위치',
    'ci-location-value': '서울, 대한민국',
    'form-title':        '연락하기',
    'contact-desc':      '편하게 연락 주세요 — 최대한 빠르게 답변드리겠습니다.',
    'form-btn':          '이메일 보내기',
  },
};

let currentLang = 'en';

function applyLang(lang) {
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.documentElement.lang = lang;
  currentLang = lang;
}

const langToggleBtn = document.querySelector('[data-lang-toggle]');
langToggleBtn?.addEventListener('click', () => {
  const next = currentLang === 'en' ? 'ko' : 'en';
  applyLang(next);
  langToggleBtn.textContent = next === 'en' ? 'KO' : 'EN';
});

// ============================================================
// SIDEBAR TOGGLE (mobile)
// ============================================================
const sidebarBtn  = document.querySelector('[data-sidebar-btn]');
const sidebarMore = document.querySelector('[data-sidebar-more]');

sidebarBtn?.addEventListener('click', () => {
  const isOpen = sidebarBtn.classList.toggle('active');
  sidebarMore.classList.toggle('active', isOpen);
  const span = sidebarBtn.querySelector('[data-i18n]');
  if (span) span.dataset.i18n = isOpen ? 'sidebar-btn-close' : 'sidebar-btn-open';
  if (span) span.textContent = translations[currentLang][span.dataset.i18n];
});

// ============================================================
// TAB NAVIGATION
// ============================================================
const navLinks = document.querySelectorAll('[data-nav-link]');
const articles = document.querySelectorAll('[data-page]');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const target = link.textContent.trim().toLowerCase();

    navLinks.forEach(l => l.classList.remove('active'));
    articles.forEach(a => a.classList.remove('active'));

    link.classList.add('active');

    const page = document.querySelector(`[data-page="${target}"]`);
    if (page) {
      page.classList.add('active');
      if (target === 'resume') triggerSkillBars();
    }
  });
});

// ============================================================
// SKILL BAR ANIMATION
// ============================================================
let skillsAnimated = false;

function triggerSkillBars() {
  if (skillsAnimated) return;
  skillsAnimated = true;

  document.querySelectorAll('.skill-progress-fill').forEach(bar => {
    const pct = bar.dataset.progress;
    bar.style.width = '0';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.width = pct + '%';
      });
    });
  });
}

if (document.querySelector('[data-page="resume"].active')) {
  triggerSkillBars();
}

// ============================================================
// PORTFOLIO FILTER
// ============================================================
const filterBtns  = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const selected = btn.textContent.trim().toLowerCase();

    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    filterItems.forEach(item => {
      const cat = item.dataset.category.toLowerCase();
      const show = selected === 'all' || cat === selected;
      item.classList.toggle('active', show);
    });
  });
});

// ============================================================
// SMOOTH SCROLL TO TOP on tab switch
// ============================================================
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
