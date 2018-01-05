export class Movie {

	constructor(
		public id?: number,
		public name?: string,
		public director?: string,
		public imageUrl?: string,
    public duration?: number,
    public releseDate?: Date,
    public genres?: string[]

	){}

}
