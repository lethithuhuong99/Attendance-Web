$("#add_user").submit(function (event) {
  alert("data inserted successfully");
});

$("#update_user").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();

  var data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });
  console.log(data);

  var request = {
    url: `http://localhost:3000/users/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert("data update successfully");
  });
});

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");
    console.log(id);
    var request = {
      url: `http://localhost:3000/users/${id}`,
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done(function (response) {
        alert("data delete successfully");
        location.reload();
      });
    }
  });
}

if (window.location.pathname == "/attendance") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");
    console.log(id);
    var request = {
      url: `http://localhost:3000/attendances/${id}`,
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done(function (response) {
        alert("data delete successfully");
        location.reload();
      });
    }
  });
}
