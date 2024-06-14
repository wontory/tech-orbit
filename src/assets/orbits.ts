function orbits(size: number, length: number) {
  const orbitTotal = Math.ceil(length / 2)

  return Array.from(
    { length: orbitTotal },
    (_, index) => `
      <circle 
        cx="${size / 2}"
        cy="${size / 2}"
        r="${80 + 110 * index}"
        fill="none"
        stroke="black"
        stroke-opacity="0.1"
        stroke-dasharray="4 4"
      />
    `,
  )
}

export { orbits }
