import { MovieClass } from './../model/Movie';
import { BaseDatabase } from "./baseDataBase";
import { TABLE_MOVIES } from "./tableNames";


export class MoviesDatabase extends BaseDatabase {

    TABLE_NAME = TABLE_MOVIES

    insertMovie = async (movie: MovieClass): Promise<void> => {
        try {
            await MoviesDatabase.connection.insert({
                id: movie.getId(),
                title: movie.getTitle(),
                description: movie.getDescription(),
                duration_in_minutes: movie.getDurationInMinutes(),
                year_of_release: movie.getYearOfRelease()
            }).into(this.TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.message)
        }

    }

    MovieTitleExists = async (title: string):Promise<MovieClass[]> => {
        try {
            return await MoviesDatabase.connection(this.TABLE_NAME).where('title', title)
            
        } catch (error: any) {
            throw new Error(error.message)
        }

    }
}