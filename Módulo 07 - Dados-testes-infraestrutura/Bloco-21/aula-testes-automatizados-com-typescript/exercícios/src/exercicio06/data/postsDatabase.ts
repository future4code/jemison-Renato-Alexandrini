import { FeedInputDTO } from './../model/DTO/postDTOs';
import { ReturnPostGetByDTO, PostGetByIdInputDTO, PostGetByTypeInputDTO } from '../model/DTO/postDTOs';
import { PostRepository } from '../business/repository/postRepository';
import { PostClass, TypeEnum } from '../model/class/postClass';
import { CustomError } from './../error/customError';
import { TABLE_POSTS, TABLE_USERS } from './tableNames';
import { BaseDatabase } from "./baseDatabase";




export class PostDatabase extends BaseDatabase implements PostRepository {

    TABLE_NAME = TABLE_POSTS

    public insertPost = async (post: PostClass): Promise<void> => {
        try {

            await PostDatabase.connection(this.TABLE_NAME).insert(post)

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    };

    public getPostById = async (input: PostGetByIdInputDTO): Promise<ReturnPostGetByDTO[]> => {
        try {
            const result = await PostDatabase.connection.raw(`
                SELECT id AS "ID do Post", photo AS "URL da imagem", description AS "Descrição", type AS "tipo de postagem", DATE_FORMAT(STR_TO_DATE(created_at, '%Y-%m-%d %H:%i:%s'), '%d/%m/%Y %H:%i:%s') AS "postado em", author_id_fk AS "ID Autor"
                FROM ${this.TABLE_NAME}
                WHERE id = "${input.postId}"
            `)

            return result[0]

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    };

    public deletePost = async (postId: string): Promise<void> => {
        try {
            await PostDatabase.connection(this.TABLE_NAME).where('id', postId).del()

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    };

    public destroy = async (): Promise<void> => {
        try {
            await PostDatabase.connection.destroy()

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    };

}
