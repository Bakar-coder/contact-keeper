const validEmail = email => {
  return /^[^\s@]+@[^\@]+\.[^\s@]+$/.test(email);
};

export default validEmail;
