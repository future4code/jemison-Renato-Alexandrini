export class MovieClass {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private duration_in_minutes: number,
        private year_of_release: number
    ) { }

    getId() {
        return this.id
    }
    setId(newId: string) {
        this.id = newId
    }

    getTitle() {
        return this.title
    }
    setTitle(newTitle: string) {
        this.title = newTitle
    }

    
    getDescription() {
        return this.description
    }
    setDescription(newDescription: string) {
        this.description = newDescription
    }

    
    getDurationInMinutes() {
        return this.duration_in_minutes
    }
    setDurationInMinutes(newDurationInMinutes: number) {
        this.duration_in_minutes = newDurationInMinutes
    }

    getYearOfRelease() {
        return this.year_of_release
        }
    setYearOfRelease(newYearOfRelease: number) {
        this.year_of_release = newYearOfRelease
    }

}