import { IPost } from '../interfaces/post.interface';
import modules from '../modules';

export const POST_DATA: IPost[] = [
  {
    key: 1,
    created_by: {
      key: 'pk.nosloy',
      name: 'PK Blanko',
      photoURL: modules.pkPROfile,
    },
    content: 'I love my mom',
    postImage: `https://scontent.fpnh1-1.fna.fbcdn.net/v/t39.30808-6/487731008_1960874301109756_591516847546127900_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sXGHTL_iqWkQ7kNvwGHw9AL&_nc_oc=AdmjVr8zrCkEc5tWE0HyYW105LGEN-Nx3qH-7oSt4CliXKANI3mh11CjJQBij6PHIdk&_nc_zt=23&_nc_ht=scontent.fpnh1-1.fna&_nc_gid=eDstLy_TabZLVfbdYXMesQ&oh=00_AfiaC4DVYCbKku8G0qyP-IUwRNcfvd6WG5vaikkkNdGivg&oe=6932DD66`,
    createdAt: '2h',
  },
  {
    key: 2,
    created_by: {
      key: 'meng.meng.578474',
      name: 'Meng Meng',
      photoURL: modules.mengPROfile,
    },
    content: 'HALA MADRID!!',
    postImage: `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Real_Madrid_C.F._the_Winner_Of_The_Champions_League_in_2018_%281%29.jpg/1200px-Real_Madrid_C.F._the_Winner_Of_The_Champions_League_in_2018_%281%29.jpg`,
    createdAt: '5h',
  },
];
