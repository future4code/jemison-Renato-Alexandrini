import { CustomError } from './../error/CustomError';
import { TitleMissing, DescriptionMissing, DurationMissing, ReleaseMissing, TitleExist } from './../error/MovieError';
import { MovieInputDTO } from './../model/MovieDTO';
import { MovieClass } from '../model/Movie';
import { MoviesDatabase } from '../data/MoviesDatabase';
import { generateId } from '../services/idGenerator';

export class MovieBusiness {

async createMovie({title, description, durationInMinutes, yearOfRelease}:MovieInputDTO):Promise<void> {

        try {        

            if (!title) {
                throw new TitleMissing()
            }
            if (!description) {
                throw new DescriptionMissing()
            }
            if (!durationInMinutes) {
                throw new DurationMissing()
            }
            if (!yearOfRelease) {
                throw new ReleaseMissing()
            }
        

            const moviesDatabase = new MoviesDatabase()

            const titleExists = await moviesDatabase.MovieTitleExists(title)
            
            if (titleExists.length > 0) {
                throw new TitleExist()
            } else {
                const id = generateId()

                const movie = new MovieClass(
                    id,
                    title,
                    description,
                    durationInMinutes,
                    yearOfRelease
                    )
                         
                await moviesDatabase.insertMovie(movie)

            }
        } catch (error: any) {
            throw new CustomError(error.statusCode,error.message)
        }
    }
}