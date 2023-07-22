module.exports = {
  routes: [
      {
        method: 'GET',
        path: '/students/filter',
        handler: 'student.findByFilters',
      },
      {
        method: 'POST',
        path: '/students/addFavorite/:id',
        handler: 'student.addStudentToFavorites',
      },
      {
        method: 'DELETE',
        path: '/students/deleteFavorite/:id',
        handler: 'student.removeStudentFromFavorites',
      },
  ]
};
