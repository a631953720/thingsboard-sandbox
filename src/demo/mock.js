function deviceDataA() {
  return JSON.stringify({
    CPU: {
      loading: 77,
    },
    MEM: {
      loading: 88,
    },
    Value: {
      one: {
        two: {
          three: 'deep',
        },
      },
    },
  });
}

function deviceDataB() {
  return JSON.stringify({
    id: '123456',
    model: 'FP',
    time: 1234567,
    in: 516,
    out: 391,
    now: 125,
    max: 133,
    average: 46,
  });
}

module.exports = {
  deviceDataA,
  deviceDataB,
};
