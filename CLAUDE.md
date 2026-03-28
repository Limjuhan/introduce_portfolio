# CLAUDE.md — introduce_portfolio

## 프로젝트 개요

임주한(Juhan Lim)의 개인 포트폴리오 웹사이트.
빌드 도구 없는 순수 HTML/CSS/Vanilla JS 정적 사이트.
GitHub Pages 배포: `https://limjuhan.github.io/introduce_portfolio/`

## 기술 스택

| 분류 | 기술 |
|------|------|
| 마크업 | HTML5 (시맨틱) |
| 스타일 | CSS3 (CSS 변수, Flexbox, Grid) |
| 스크립트 | Vanilla JavaScript ES6+ |
| 라이브러리 | TypeIt v8.7.1 (타이핑 애니메이션), Font Awesome (아이콘) |
| 배포 | GitHub Pages |

## 파일 구조

```
introduce_portfolio/
├── index.html          # 단일 진입점 (373줄)
├── css/
│   └── style.css       # 전체 스타일 (735줄)
├── src/
│   ├── main.js         # 스크롤 이벤트, 햄버거 메뉴
│   ├── projects.js     # 프로젝트 카테고리 필터링
│   ├── active_menu.js  # IntersectionObserver 기반 메뉴 하이라이팅
│   └── type.js         # TypeIt 타이핑 애니메이션
└── images/
    ├── jobs/           # 회사 로고
    ├── projects/       # 프로젝트 스크린샷
    └── testimonials/   # 추천사 사진
```

## 로컬 실행

빌드 과정 없음. 아래 중 하나로 실행:

```bash
python -m http.server 8000
# 또는
npx live-server
# 또는 index.html 직접 브라우저에서 열기
```

## 디자인 시스템 (CSS 변수)

| 변수 | 값 | 용도 |
|------|----|------|
| `--bg-color` | `#050a13` | 배경 (다크) |
| `--accent-color` | `#03e8f9` | 포인트 색상 (시안) |
| `--accent-variant` | `#fd6413` | 강조 변형 (오렌지) |
| 모바일 분기점 | `768px` | 반응형 기준 |

## 섹션 구성

1. **Home** — 타이핑 애니메이션, CTA 버튼
2. **About** — 경력 타임라인, 자기소개
3. **Skills** — 프론트엔드/백엔드/도구 스킬
4. **My Work** — 프로젝트 필터 (All / Front-end / Back-end)
5. **Testimonials** — 동료 추천사
6. **Contact/Footer** — 이메일, GitHub 링크

## 작업 시 주의사항

- **빌드 없음**: 파일을 직접 편집하면 즉시 반영됨
- **CDN 의존성**: TypeIt, Font Awesome은 인터넷 연결 필요
- **이미지 포맷**: 프로젝트 이미지는 `.webp` 선호 (최적화)
- **브라우저 호환성**: IntersectionObserver 사용 중 (IE 미지원)
- **`projects.js`**: 주석 처리된 IntersectionObserver 코드 존재 (미완성)
