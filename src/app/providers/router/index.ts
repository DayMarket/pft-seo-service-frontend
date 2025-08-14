import { createRouter } from 'vue-router';

import { guard, options } from '$app/providers/router/config.ts';

const router = createRouter(options);

export default guard(router);
