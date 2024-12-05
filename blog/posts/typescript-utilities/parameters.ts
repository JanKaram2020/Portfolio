// @ts-nocheck
// This is live code you can change it or hover over it to see the types
function getFullName(firstName: string, lastName: string) {
  return firstName + " " + lastName;
}
type GetFullNameParams = Parameters<typeof getFullName>;
/*split*/
type FullName = ReturnType<typeof getFullName>;
