function text(title: string) {
  return `
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color: black" />
        <stop offset="100%" style="stop-color: rgba(156,163,175,0.3)" />
      </linearGradient>
      <style type="text/css">@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css');</style>
    </defs>
    <style>
      text {
        font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
      }
    </style>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="url(#gradient)" font-size="5.5rem" font-weight="600">
      ${title}
    </text>
  `
}

export { text }
