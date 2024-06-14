function Text(text: string) {
  return `
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color: black" />
        <stop offset="100%" style="stop-color: rgba(156,163,175,0.3)" />
      </linearGradient>
    </defs>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="url(#gradient)" font-size="5.5rem" font-weight="600">
      ${text}
    </text>
  `
}

export { Text }
