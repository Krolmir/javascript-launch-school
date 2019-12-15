if (foo()) {
  return 'bar';
} else {
  return qux();
}

return foo() ? 'bar' : qux();