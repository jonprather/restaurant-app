export const getZodErrorMessage = (schema, testObj) => {
  const data = schema.safeParse(testObj);
  if (data.success) return null;
  const formatted = data.error.format();
  return formatted._errors.join(". ");
};
