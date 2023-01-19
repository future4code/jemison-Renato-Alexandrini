import { MovieClass } from './../types/Movie';
import { MoviesDatabase } from '../data/MoviesDatabase';
import { v4 as generateId } from 'uuid'

export class MovieBusiness {

    createMovie = async (movie: any): Promise<void> => {

        try {
            const {title, description, durationInMinutes, yearOfRelease  } = movie

            if (!title) {
                throw new Error('Título do filme faltando')
            }
            if (!description) {
                throw new Error('Descrição do filme faltando')
            }
            if (!durationInMinutes) {
                throw new Error('Duração do filme faltando')
            }
            if (!yearOfRelease) {
                throw new Error('Ano de lançamento do fime faltando')
            }

            const moviesDatabase = new MoviesDatabase()

            const titleExists = await moviesDatabase.MovieTitleExists(movie.title)
            
            if (titleExists.length > 0) {
                throw new Error('Título de filme já cadastrado anteriormente')
            } else {
                const id = generateId()

                const newMovie = new MovieClass(
                    id,
                    movie.title,
                    movie.description,
                    Number(durationInMinutes),
                    Number(movie.yearOfRelease)
                )

                await moviesDatabase.insertMovie(newMovie)

            }
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}