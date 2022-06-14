const dataGender = [
    {
      value: 'all',
      label: 'All',
    },
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
      label: 'Female',
    }
];

const tableHead = [
    {
      id: 'username',
      isActive: false,
      disablePadding: true,
      label: 'Username',
      orderBy: 'asc'
    },
    {
      id: 'name',
      isActive: false,
      disablePadding: true,
      label: 'Name',
      orderBy: 'asc'
    },
    {
      id: 'email',
      isActive: false,
      disablePadding: true,
      label: 'Email',
      orderBy: 'asc'
    },
    {
      id: 'gender',
      isActive: false,
      disablePadding: true,
      label: 'Gender',
      orderBy: 'asc'
    },
    {
      id: 'date',
      isActive: false,
      disablePadding: true,
      label: 'Date',
      orderBy: 'asc'
    },
];

export {
    dataGender,
    tableHead
};
