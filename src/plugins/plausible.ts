import Plausible from 'plausible-tracker';

export default {
  install: (app: any, options: any) => {
    const { enableAutoPageviews } = Plausible(options);

    enableAutoPageviews();

    app.provide('plausible');
  },
};