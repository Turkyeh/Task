

  function showUserCreateBox() {
  Swal.fire({
    title: "اضافة حركة جديدة",
    html:
      '<input id="id" type="hidden">' +
      '<input id="نوع الحركة" class="swal2-input" placeholder="نوع الحركة">' +
      
      '<input id="من تاريخ" class="swal2-input" placeholder="من تاريخ">' +
      '<input id="الى تاريخ" class="swal2-input" placeholder="الى تاريخ">' +
      '<input id=التفاصيل"خ" class="swal2-input" placeholder="التفاصيل">' +

      '<input id="الحالة " class="swal2-input" placeholder="الحالة ">',
    focusConfirm: false,
    preConfirm: () => {
      userCreate();
    },
  });
}


