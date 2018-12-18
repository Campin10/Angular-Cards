import Post from '../model/post';
import {v1 as uuid} from 'uuid';

class PostsRepository {
  private static instance: PostsRepository;
  private _posts: Array<Post> = [
    new Post('321c04d0-a25f-11e8-ad0a-1d90dd5e7d7c',
      'Home post',
      'THE MIGHTY CHUNKS rise all over the world, including the oceans. They usually have steep, sloping sides and sharp or rounded ridges, and a high point, called a peak or summit. Most geologists classify a mountain as a landform that rises at least 1,000 feet (300 meters) or more above its surrounding area. A mountain range is a series or chain of mountains that are close together.',
      ['first', 'test'],
      'https://i.pinimg.com/originals/3d/89/57/3d89576f0e97b4428bfdab0912b6938d.jpg'),
      new Post('321c04d0-a25f-11e8-ad0a-1d90dd5e7d7u',
      'Natural',
      'An ecosystem is a community made up of living organisms and nonliving components such as air, water, and mineral soil. Ecosystems can be studied in two different ways. They can be thought of as interdependent collections of plants and animals, or as structured systems and communities governed by general rules.',
      ['first', 'test'],
      'https://i.pinimg.com/originals/b1/2b/53/b12b53e6955032f1010a42a7fb6f54cb.jpg'),
      new Post('321c04d0-a25f-11e8-ad0a-1d90dd5e7d7t',
      'Miami Beach',
      'Miami Beach es una ciudad insular del sur de Florida, que se conecta a través de puentes con el territorio de Miami. Sus largas playas se extienden desde el North Shore Open Space Park, pasa por Lummus Park, bordeado de palmeras, y llegan a South Pointe Park.',
      ['first', 'test'],
      'https://i.pinimg.com/originals/25/05/3f/25053f7c66c6bacc3fa238f0fd3ed781.jpg')
  ];

  constructor() {
    if (!PostsRepository.instance) {
      PostsRepository.instance = this;
    }
    return PostsRepository.instance;
  }

  get posts() {
    return this._posts;
  }

  getPost(id: string): Post | undefined {
    return this._posts.find(post => post.id === id);
  }

  addPost(title: string, description: string, tags: Array<string>): Post {
    const newPost = new Post(uuid(), title, description, tags);
    this._posts.push(newPost);
    return newPost;
  }

  update(post: Post){
    const index = this._posts.findIndex((p: Post)=>{return p.id === post.id});
    this._posts[index] = post;
    return post;
  }
}

export default new PostsRepository();
