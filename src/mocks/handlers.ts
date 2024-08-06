import { faker } from '@faker-js/faker';
import { HttpResponse, http } from 'msw';

function generateDate() {
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);
  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  });
}

const users = [{ id: 'user', name: 'user' }];

export const handlers = [
  http.get('/users', () => {
    return HttpResponse.json(users);
  }),
];
