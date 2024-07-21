class Food {
    id: number
    title: string
    score: number
    image: string
    description: string
    culture: string
    highlight: string
  
    constructor(
      id: number,
      title: string,
      score: number,
      image: string,
      description: string,
      culture: string,
      highlight: string
    ) {
      this.id = id;
      this.title = title;
      this.score = score;
      this.image = image;
      this.description = description;
      this.culture = culture;
      this.highlight = highlight;
    }
  }
  
  export default Food;
  