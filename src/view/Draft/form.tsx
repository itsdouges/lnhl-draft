export default [
  {
    id: 'years',
    name: 'years',
    type: 'radiogroup',
    label: 'How long have you been playing?',
    required: true,
    options: [
      {
        items: ['Never played', '0-1 years', '1-3 years', '3-6 years', '7+ years'],
      },
    ],
  },
  {
    id: 'icepractice',
    name: 'icepractice',
    type: 'radiogroup',
    label: 'How often do you do non-game ON ice practice a week?',
    required: true,
    options: [
      {
        items: ['0', '1', '2', '3+'],
      },
    ],
  },
  {
    id: 'officepractice',
    name: 'officepractice',
    type: 'radiogroup',
    label: 'How often do you do non-game OFF ice practice a week?',
    required: true,
    options: [
      {
        items: ['0', '1', '2', '3+'],
      },
    ],
  },
  {
    id: 'goals',
    name: 'goals',
    type: 'radiogroup',
    label: 'How many goals did you get last season?',
    required: true,
    options: [
      {
        items: ['0', '1', '2-5', '5+'],
      },
    ],
    visibleWhen: [
      {
        field: 'years',
        is: ['0-1 years', '1-3 years', '3-6 years', '7+ years'],
      },
    ],
  },
  {
    id: 'assists',
    name: 'assists',
    type: 'radiogroup',
    label: 'How many assists did you get last season?',
    required: true,
    options: [
      {
        items: ['0', '1', '2-5', '5+'],
      },
    ],
    visibleWhen: [
      {
        field: 'years',
        is: ['0-1 years', '1-3 years', '3-6 years', '7+ years'],
      },
    ],
  },
];
