

// fetchTodoById is the "thunk action creator"
export function fetchDummy(dummyId: string) {
  // fetchTodoByIdThunk is the "thunk function"
  return function fetchDummyThunk(dispatch, getState) {
    console.log('dummyId in thunk: ', dummyId)
  }
}