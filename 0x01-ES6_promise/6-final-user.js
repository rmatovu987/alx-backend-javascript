import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName)
    .then((data) => ({ status: 'fulfilled', value: data }));

  const photo = uploadPhoto(fileName)
    .catch((error) => ({ status: 'rejected', value: error.toString() }));

  return new Promise((resolve) => {
    resolve([
      user,
      photo,
    ]);
  });
}
