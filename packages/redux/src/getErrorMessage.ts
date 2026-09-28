// createAsyncThunk's `.unwrap()` rejects with a plain SerializedError object
// (not an Error instance) unless the thunk uses rejectWithValue, so a plain
// `error instanceof Error` check misses real thunk failures and always falls
// back to the generic message, hiding the actual reason (e.g. a Firebase
// auth error code).
export function getErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === 'object' && error !== null && 'message' in error) {
    const message = (error as { message?: unknown }).message;
    if (typeof message === 'string' && message) {
      return message;
    }
  }
  return fallback;
}
