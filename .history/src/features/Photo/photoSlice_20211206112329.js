import { createSlice } from "@reduxjs/toolkit";

const photoSlice = createSlice({
  name: "Photo",
  
    initialState: [
    {
      id: 1,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title:
        "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    },
    {
      id: 2,
      categoryId: 4,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title: "Vestibulum rutrum rutrum neque.",
    },
    {
      id: 3,
      categoryId: 3,
      photo: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      title:
        "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    },
    {
      id: 4,
      categoryId: 4,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title: "In quis justo.",
    },
    {
      id: 5,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title:
        "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    },
    {
      id: 6,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title:
        "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    },
    {
      id: 7,
      categoryId: 4,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title: "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    },
    {
      id: 8,
      categoryId: 2,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title:
        "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    },
    {
      id: 9,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      title:
        "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    },
    {
      id: 10,
      categoryId: 4,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title:
        "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
    },
    {
      id: 11,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title: "Duis bibendum.",
    },
    {
      id: 12,
      categoryId: 2,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title: "Donec ut dolor.",
    },
    {
      id: 13,
      categoryId: 4,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title:
        "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    },
    {
      id: 14,
      categoryId: 4,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title:
        "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    },
    {
      id: 15,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title: "Cras pellentesque volutpat dui.",
    },
    {
      id: 16,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title:
        "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    },
    {
      id: 17,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      title:
        "Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    },
    {
      id: 18,
      categoryId: 2,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title:
        "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    },
    {
      id: 19,
      categoryId: 3,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title: "Quisque porta volutpat erat.",
    },
    {
      id: 20,
      categoryId: 2,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title:
        "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    },
    {
      id: 21,
      categoryId: 2,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title:
        "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    },
    {
      id: 22,
      categoryId: 2,
      photo: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      title:
        "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    },
    {
      id: 23,
      categoryId: 2,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title: "Pellentesque ultrices mattis odio. Donec vitae nisi.",
    },
    {
      id: 24,
      categoryId: 1,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title:
        "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    },
    {
      id: 25,
      categoryId: 2,
      photo: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      title: "Vivamus tortor.",
    },
    {
      id: 26,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title:
        "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    },
    {
      id: 27,
      categoryId: 1,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title:
        "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    },
    {
      id: 28,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title: "Vestibulum sed magna at nunc commodo placerat.",
    },
    {
      id: 29,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      title:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    },
    {
      id: 30,
      categoryId: 1,
      photo: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      title: "Praesent lectus.",
    },
    {
      id: 31,
      categoryId: 1,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title: "Donec ut dolor.",
    },
    {
      id: 32,
      categoryId: 3,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title:
        "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    },
    {
      id: 33,
      categoryId: 3,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title: "Proin eu mi. Nulla ac enim.",
    },
    {
      id: 34,
      categoryId: 1,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    },
    {
      id: 35,
      categoryId: 3,
      photo: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      title: "Praesent blandit.",
    },
    {
      id: 36,
      categoryId: 2,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title: "Donec quis orci eget orci vehicula condimentum.",
    },
    {
      id: 37,
      categoryId: 3,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title: "Pellentesque eget nunc.",
    },
    {
      id: 38,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title: "Phasellus in felis. Donec semper sapien a libero.",
    },
    {
      id: 39,
      categoryId: 3,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title:
        "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    },
    {
      id: 40,
      categoryId: 2,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title:
        "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    },
    {
      id: 41,
      categoryId: 2,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title:
        "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    },
    {
      id: 42,
      categoryId: 2,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title:
        "Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    },
    {
      id: 43,
      categoryId: 2,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title:
        "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    },
    {
      id: 44,
      categoryId: 4,
      photo: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      title:
        "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    },
    {
      id: 45,
      categoryId: 3,
      photo: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      title:
        "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    },
    {
      id: 46,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      title: "Donec dapibus.",
    },
    {
      id: 47,
      categoryId: 3,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title: "Suspendisse potenti.",
    },
    {
      id: 48,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title:
        "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    },
    {
      id: 49,
      categoryId: 2,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title: "Nullam varius. Nulla facilisi.",
    },
    {
      id: 50,
      categoryId: 3,
      photo: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      title:
        "Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    },
    {
      id: 51,
      categoryId: 3,
      photo: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      title: "Sed ante.",
    },
    {
      id: 52,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title: "Morbi non quam nec dui luctus rutrum.",
    },
    {
      id: 53,
      categoryId: 2,
      photo: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      title:
        "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    },
    {
      id: 54,
      categoryId: 3,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title: "Donec semper sapien a libero. Nam dui.",
    },
    {
      id: 55,
      categoryId: 1,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    },
    {
      id: 56,
      categoryId: 2,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title: "Morbi a ipsum.",
    },
    {
      id: 57,
      categoryId: 1,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title: "Duis ac nibh.",
    },
    {
      id: 58,
      categoryId: 1,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title:
        "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
    },
    {
      id: 59,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      title: "Sed ante. Vivamus tortor.",
    },
    {
      id: 60,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    },
    {
      id: 61,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      title: "Curabitur gravida nisi at nibh.",
    },
    {
      id: 62,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      title: "Etiam vel augue.",
    },
    {
      id: 63,
      categoryId: 4,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title: "Curabitur gravida nisi at nibh.",
    },
    {
      id: 64,
      categoryId: 4,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title:
        "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    },
    {
      id: 65,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title:
        "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    },
    {
      id: 66,
      categoryId: 3,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title: "Mauris sit amet eros.",
    },
    {
      id: 67,
      categoryId: 3,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title: "Aliquam non mauris. Morbi non lectus.",
    },
    {
      id: 68,
      categoryId: 1,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title:
        "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    },
    {
      id: 69,
      categoryId: 3,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title: "In eleifend quam a odio. In hac habitasse platea dictumst.",
    },
    {
      id: 70,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title: "Aenean fermentum.",
    },
    {
      id: 71,
      categoryId: 2,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title: "Suspendisse potenti.",
    },
    {
      id: 72,
      categoryId: 2,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title: "Donec posuere metus vitae ipsum. Aliquam non mauris.",
    },
    {
      id: 73,
      categoryId: 2,
      photo: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      title: "Donec dapibus. Duis at velit eu est congue elementum.",
    },
    {
      id: 74,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title:
        "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    },
    {
      id: 75,
      categoryId: 1,
      photo: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      title: "Morbi quis tortor id nulla ultrices aliquet.",
    },
    {
      id: 76,
      categoryId: 1,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title:
        "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    },
    {
      id: 77,
      categoryId: 3,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title:
        "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    },
    {
      id: 78,
      categoryId: 4,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title: "Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    },
    {
      id: 79,
      categoryId: 2,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    },
    {
      id: 80,
      categoryId: 2,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title: "Nulla ac enim.",
    },
    {
      id: 81,
      categoryId: 4,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title: "Cras pellentesque volutpat dui.",
    },
    {
      id: 82,
      categoryId: 3,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title:
        "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
    {
      id: 83,
      categoryId: 1,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title:
        "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    },
    {
      id: 84,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title:
        "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    },
    {
      id: 85,
      categoryId: 3,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title: "Maecenas ut massa quis augue luctus tincidunt.",
    },
    {
      id: 86,
      categoryId: 4,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title:
        "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    },
    {
      id: 87,
      categoryId: 3,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title:
        "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    },
    {
      id: 88,
      categoryId: 1,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title: "Maecenas pulvinar lobortis est.",
    },
    {
      id: 89,
      categoryId: 3,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title: "Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    },
    {
      id: 90,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      title: "Ut at dolor quis odio consequat varius.",
    },
    {
      id: 91,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title: "Aenean sit amet justo.",
    },
    {
      id: 92,
      categoryId: 2,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title:
        "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
    {
      id: 93,
      categoryId: 4,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title: "Aenean fermentum.",
    },
    {
      id: 94,
      categoryId: 1,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title: "Nulla ac enim.",
    },
    {
      id: 95,
      categoryId: 4,
      photo: "http://dummyimage.com/300x300.png/cc0000/ffffff",
      title:
        "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    },
    {
      id: 96,
      categoryId: 4,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title: "In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    },
    {
      id: 97,
      categoryId: 4,
      photo: "http://dummyimage.com/300x300.png/5fa2dd/ffffff",
      title:
        "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    },
    {
      id: 98,
      categoryId: 2,
      photo: "http://dummyimage.com/300x300.png/ff4444/ffffff",
      title: "Morbi ut odio.",
    },
    {
      id: 99,
      categoryId: 1,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title: "Aliquam erat volutpat. In congue.",
    },
    {
      id: 100,
      categoryId: 5,
      photo: "http://dummyimage.com/300x300.png/dddddd/000000",
      title:
        "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    },
  ],
  reducers: {
    addPhoto: (state, action) => {
      state.push(action.payload);
    },
    removePhoto: (state, action) => {
      const removePhotoId = action.payload;
      state = state.filter((photo) => photo.id !== removePhotoId);
      return state;
    },
    updatePhoto: (state, action) => {
      const newPhoto = action.payload;
      const photoIndex = state.findIndex((photo) => photo.id === newPhoto.id);
      if (photoIndex >= 0) {
        state[photoIndex] = newPhoto;
      }
    },
  },
});

const { reducer: photoReducer, actions } = photoSlice;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default photoReducer;
