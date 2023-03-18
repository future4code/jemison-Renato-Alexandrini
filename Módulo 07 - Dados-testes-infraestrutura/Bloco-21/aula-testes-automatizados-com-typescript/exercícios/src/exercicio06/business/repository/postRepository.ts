import { ReturnPostGetByDTO, PostGetByIdInputDTO, PostGetByTypeInputDTO, FeedInputDTO } from '../../model/DTO/postDTOs';
import { PostClass } from "../../model/class/postClass"

export interface PostRepository {

    insertPost(post: PostClass): Promise<void>
    getPostById(input: PostGetByIdInputDTO): Promise<ReturnPostGetByDTO[]>
    deletePost(postId: string): Promise<void>
    destroy(): Promise<void>
}