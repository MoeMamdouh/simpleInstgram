export const selectLibrary = (libraryId) => {
    console.log('==>Action creator function, libraryId: ', libraryId)
  return {
    type: 'select_library',
    payload: libraryId
  };
};
