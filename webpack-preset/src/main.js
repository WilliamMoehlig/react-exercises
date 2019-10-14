import userService from './userService';
import 'font-awesome/scss/font-awesome.scss';
import './styles.scss';

const users = userService.getAll();
users.forEach(function(user) {
  console.log(user.id, user.name);
});
