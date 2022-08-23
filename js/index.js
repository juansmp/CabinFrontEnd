/* URL PARA CONECTAR A LA BD*/
// const urlBase = "https://g651f78cf1701ef-bdalquilercabanas.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/";
const urlBase = "http://localhost/api/";
//const urlBase = "http://132.145.108.18:8082/api/";



/************************** METODOS CABANAS ***************************/
$('#CabanasTable').on('click', 'tbody tr', function (event) {
    $(this).addClass('highlight').siblings().removeClass('highlight');
});

//TRAER INFORMACION CABANAS
function TablaCabanas() {
    $.ajax({
        url: urlBase + "Cabin/all",
        method: "GET",
        dataType: "json",
        success: function (response) {
            $("#tablaCabana").empty();
            response.forEach(element => {
                let row = $("<tr class=\"clickableRow\">");
                row.append($("<td class=\"id\" style=\"display:none\">").text(element.id));
                row.append($("<td>").text(element.name));
                row.append($("<td>").text(element.brand));
                row.append($("<td>").text(element.rooms));
                row.append($("<td>").text(element.description));
                row.append($("<td style=\"display:none\">").text(element.category?.id));
                $("#tablaCabana").append(row);
            });
        }, error: function (error) {
            console.error(error);
        }
    });
}
//TRAER INFORMACION DE UNA CABANA POR SU ID
function GetCabanaById(IdCabana) {
    return $.ajax({
        url: urlBase + "Cabin/" + IdCabana,
        method: "GET",
        dataType: "json"
    });
}


//INSERTAR INFORMACION A LA TABLA CABANAS
function PostCabana(Nombre, TipoCabin, Habitaciones, Id_Categoria, Descripcion) {
    let cabin = {
        name: Nombre,
        brand: TipoCabin,
        rooms: Habitaciones,
        category: { "id": Id_Categoria },
        description: Descripcion
    }
    return $.ajax({
        url: urlBase + "Cabin/save",
        method: "POST",
        contentType: 'application/json',
        data: JSON.stringify(cabin)
    });
}
//ACTUALIZAR INFORMACION DE UNA CABANA POR SU ID
function PutCabanaById(IdCabana, Nombre, TipoCabin, Habitaciones, Id_Categoria, Descripcion) {
    let cabin = {
        id: IdCabana,
        name: Nombre,
        brand: TipoCabin,
        rooms: Habitaciones,
        category: { "id": Id_Categoria },
        description: Descripcion
    }
    return $.ajax({
        url: urlBase + "Cabin/update",
        method: "PUT",
        contentType: 'application/json',
        data: JSON.stringify(cabin)
    });
}
//ELIMINAR INFORMACION DE UNA CABANA POR SU ID
function DeleteCabanaById(IdCabana) {
    let cabin = {
        id: IdCabana
    }
    return $.ajax({
        url: urlBase + "Cabin/" + IdCabana,
        method: "DELETE",
        contentType: 'application/json',
        data: JSON.stringify(cabin)
    });
}
/************************** METODOS CATEGORIA ***************************/
$('#CategoriaTable').on('click', 'tbody tr', function (event) {
    $(this).addClass('highlight').siblings().removeClass('highlight');
});
//TRAER INFORMACION CATEGORIA
function TablaCategoria() {
    $.ajax({
        url: urlBase + "Category/all",
        method: "GET",
        dataType: "json",
        success: function (response) {
            $("#tablaCategoria").empty();
            response.forEach(element => {
                let row = $("<tr class=\"clickableRow\">");
                row.append($("<td class=\"id\" style=\"display:none\">").text(element.id));
                row.append($("<td>").text(element.name));
                row.append($("<td>").text(element.description));
                $("#tablaCategoria").append(row);
            });
        }, error: function (error) {
            console.error(error);
        }
    });
}
//TRAER INFORMACION DE UNA CATEGORIA POR SU ID
function GetCategoriaById(IdCategoria) {
    return $.ajax({
        url: urlBase + "Category/" + IdCategoria,
        method: "GET",
        dataType: "json"
    });
}

//INSERTAR INFORMACION A LA TABLA CATEGORIA
function PostCategoria(Nombre, Descripcion) {
    let category = {
        name: Nombre,
        description: Descripcion
    }
    return $.ajax({
        url: urlBase + "Category/save",
        method: "POST",
        contentType: 'application/json',
        data: JSON.stringify(category)
    });
}
//ACTUALIZAR INFORMACION DE UNA CATEGORIA POR SU ID
function PutCategoriaById(IdCategoria, Nombre, Descripcion) {
    let category = {
        id: IdCategoria,
        name: Nombre,
        description: Descripcion
    }
    return $.ajax({
        url: urlBase + "Category/update",
        method: "PUT",
        contentType: 'application/json',
        data: JSON.stringify(category)
    });
}
//ELIMINAR INFORMACION DE UNA CATEGORIA POR SU ID
function DeleteCategoriaById(IdCategoria) {
    let category = {
        id: IdCategoria
    }
    return $.ajax({
        url: urlBase + "Category/" + IdCategoria,
        method: "DELETE",
        contentType: 'application/json',
        data: JSON.stringify(category)
    });
}
/************************** METODOS CLIENTES ***************************/
$('#ClientesTable').on('click', 'tbody tr', function (event) {
    $(this).addClass('highlight').siblings().removeClass('highlight');
});
//TRAER INFORMACION CLIENTES
function TablaClientes() {
    $.ajax({
        url: urlBase + "Client/all",
        method: "GET",
        dataType: "json",
        success: function (response) {
            $("#tablaClientes").empty();
            response.forEach(element => {
                let row = $("<tr class=\"clickableRow\">");
                row.append($("<td class=\"id\" style=\"display:none\">").text(element.idClient));
                row.append($("<td>").text(element.email));
                row.append($("<td>").text(element.name));
                row.append($("<td>").text(element.age));
                $("#tablaClientes").append(row);
            });
        }, error: function (error) {
            console.error(error);
        }
    });
}
//TRAER INFORMACION DE UN CLIENTE POR SU ID
function GetClienteById(IdCliente) {
    return $.ajax({
        url: urlBase + "Client/" + IdCliente,
        method: "GET",
        dataType: "json"
    });
}

//INSERTAR INFORMACION A LA TABLA CLIENTE
function PostCliente(Nombre, Email, Edad, Password) {
    let client = {
        name: Nombre,
        email: Email,
        password: Password,
        age: Edad
    }
    return $.ajax({
        url: urlBase + "Client/save",
        method: "POST",
        contentType: 'application/json',
        data: JSON.stringify(client)
    });
}
//ACTUALIZAR INFORMACION DE UN CLIENTE POR SU ID
function PutClienteById(IdCliente, Nombre, Email, Edad, Password) {
    let client = {
        idClient: IdCliente,
        name: Nombre,
        email: Email,
        password: Password,
        age: Edad
    }
    return $.ajax({
        url: urlBase + "Client/update",
        method: "PUT",
        contentType: 'application/json',
        data: JSON.stringify(client)
    });
}
//ELIMINAR INFORMACION DE UN CLIENTE POR SU ID
function DeleteClienteById(IdCliente) {
    let client = {
        idClient: IdCliente
    }
    return $.ajax({
        url: urlBase + "Client/" + IdCliente,
        method: "DELETE",
        contentType: 'application/json',
        data: JSON.stringify(client)
    });
}
/************************** METODOS MENSAJES ***************************/
$('#MensajesTable').on('click', 'tbody tr', function (event) {
    $(this).addClass('highlight').siblings().removeClass('highlight');
});
//TRAER INFORMACION MENSAJES
function TablaMensajes() {
    $.ajax({
        url: urlBase + "Message/all",
        method: "GET",
        dataType: "json",
        success: function (response) {
            $("#tablaMensajes").empty();
            response.forEach(element => {
                let row = $("<tr class=\"clickableRow\">");
                row.append($("<td class=\"id\" style=\"display:none\">").text(element.idMessage));
                row.append($("<td>").text(element.messageText));
                $("#tablaMensajes").append(row);
            });
        }, error: function (error) {
            console.error(error);
        }
    });
}
//TRAER INFORMACION DE UN MENSAJE POR SU ID
function GetMensajeById(IdMensaje) {
    return $.ajax({
        url: urlBase + "Message/" + IdMensaje,
        method: "GET",
        dataType: "json"
    });
}

//INSERTAR INFORMACION A LA TABLA MENSAJES
function PostMensaje(MensaText, Id_Cabin) {
    let message = {
        messageText: MensaText,
        cabin: { "id": Id_Cabin }
    }
    return $.ajax({
        url: urlBase + "Message/save",
        method: "POST",
        contentType: 'application/json',
        data: JSON.stringify(message)
    });
}
//ACTUALIZAR INFORMACION DE UN MENSAJE POR SU ID
function PutMensajeById(IdMensaje, TextMensaje, Id_Cabin) {
    let message = {
        idMessage: IdMensaje,
        messageText: TextMensaje,
        cabin: { "id": Id_Cabin }
    }
    return $.ajax({
        url: urlBase + "Message/update",
        method: "PUT",
        contentType: 'application/json',
        data: JSON.stringify(message)
    });
}
//ELIMINAR INFORMACION DE UN MENSAJE POR SU ID
function DeleteMensajeById(IdMensaje) {
    let message = {
        idMessage: IdMensaje
    }
    return $.ajax({
        url: urlBase + "Message/" + IdMensaje,
        method: "DELETE",
        contentType: 'application/json',
        data: JSON.stringify(message)
    });
}



/************************** METODOS RESERVAS ***************************/
$('#ReservasTable').on('click', 'tbody tr', function (event) {
    $(this).addClass('highlight').siblings().removeClass('highlight');
});

//TRAER INFORMACION RESERVAS
function TablaReservas() {
    $.ajax({
        url: urlBase + "Reservation/all",
        method: "GET",
        dataType: "json",
        success: function (response) {
            $("#tablaReservas").empty();
            response.forEach(element => {
                let row = $("<tr class=\"clickableRow\">");
                row.append($("<td class=\"id\" style=\"display:none\">").text(element.idReservation));
                row.append($("<td>").text(element.startDate));
                row.append($("<td>").text(element.devolutionDate));
                row.append($("<td style=\"display:none\">").text(element.cabin?.id));
                $("#tablaReservas").append(row);
            });
        }, error: function (error) {
            console.error(error);
        }
    });
}
//TRAER INFORMACION DE UNA RESERVA POR SU ID
function GetReservaById(IdReserva) {
    return $.ajax({
        url: urlBase + "Reservation/" + IdReserva,
        method: "GET",
        dataType: "json"
    });
}


//INSERTAR INFORMACION A LA TABLA RESERVAS
function PostReserva(FechaInicio, FechaFin, Id_Cabana) {
    let reservation = {
        startDate: FechaInicio,
        devolutionDate: FechaFin,
        cabin: { "id": Id_Cabana }
    }
    return $.ajax({
        url: urlBase + "Reservation/save",
        method: "POST",
        contentType: 'application/json',
        data: JSON.stringify(reservation)
    });
}
//ACTUALIZAR INFORMACION DE UNA RESERVA POR SU ID
function PutReservaById(IdReserva, FechaInicio, FechaFin, Id_Cabana) {
    let reservation = {
        idReservation: IdReserva,
        startDate: FechaInicio,
        devolutionDate: FechaFin,
        cabin: { "id": Id_Cabana }
    }
    return $.ajax({
        url: urlBase + "Reservation/update",
        method: "PUT",
        contentType: 'application/json',
        data: JSON.stringify(reservation)
    });
}
//ELIMINAR INFORMACION DE UNA RESERVA POR SU ID
function DeleteReservaById(IdReserva) {
    let reservation = {
        id: IdReserva
    }
    return $.ajax({
        url: urlBase + "Reservation/" + IdReserva,
        method: "DELETE",
        contentType: 'application/json',
        data: JSON.stringify(reservation)
    });
}



/*********** METODO PARA SABER EL MODULO DONDE ESTA EL USUARIO ***********/
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}
var Modulo = "";
var IdData = null;
var DataRowApi = [];
var Opcion;
/************************** EVENTO PARA CARGAR TABLA DEL MODULO ***************************/
document.getElementById('pills-tab').addEventListener("click", function (event) {
    Modulo = getEventTarget(event).innerText;
    if (Modulo == "Cabañas") {
        TablaCabanas();
    } else if (Modulo == "Categoria") {
        TablaCategoria();
    } else if (Modulo == "Clientes") {
        TablaClientes();
    } else if (Modulo == "Mensajes") {
        TablaMensajes();
    } else if (Modulo == "Reservas") {
        TablaReservas();
    }
});
/************************** EVENTOS BOTONES ***************************/
//EVENTO BOTON ACTUALIZAR
const btnActualizar = document.getElementById("btnActualizar");
btnActualizar.addEventListener("click", function (event) {
    IdData = GetDataRowSelected(Modulo);
    if (IdData != null) {
        Opcion = 0;
        $('#content-popup').empty();
        if (Modulo == "Cabañas") {
            HeaderFooterPopup("Actualizar Cabaña", "Actualizar");
            $.when(GetCabanaById(IdData)).done(function (element) {
                let NombreCabin = element.name;
                let TipoCabin = element.brand;
                let HabitacionesCabin = element.rooms;
                let IdCategoriaCabin = element.category.id;
                let DescripcionCabin = element.description;
                let Content = $("<label class=\"form-label\" style=\"min-width: 100%;\">Nombre:</label>");
                Content.append($("<input type=\"text\" class=\"form-control\" id=\"NomCabin\" placeholder=\"Nombre\" style=\"min-width: 100%;\" value=\"" + NombreCabin + "\" />"));
                Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Tipo de cabaña:</label>"));
                Content.append($("<input type=\"text\" class=\"form-control\" id=\"TipoCabin\" placeholder=\"Tipo\" style=\"min-width: 100%;\" value=\"" + TipoCabin + "\" />"));
                Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Nro. Habitaciones:</label>"));
                Content.append($("<input type=\"number\" class=\"form-control\" id=\"HabiCabin\" placeholder=\"Habitaciones\" style=\"min-width: 100%;\" value=\"" + HabitacionesCabin + "\" />"));
                Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Id Categoria:</label>"));
                Content.append($("<input type=\"number\" class=\"form-control\" id=\"CateCabin\" placeholder=\"Id Categoria\" style=\"min-width: 100%;\" value=\"" + IdCategoriaCabin + "\" />"));
                Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Descripción:</label>"));
                Content.append($("<textarea id=\"DescCabin\" class=\"form-control\ style=\"min-width: 100%\" rows=\"5\">" + DescripcionCabin + "</textarea>"));
                $('#content-popup').append(Content);
                myModal.show();
            });
        } else if (Modulo == "Categoria") {
            HeaderFooterPopup("Actualizar Categoria", "Actualizar");
            $.when(GetCategoriaById(IdData)).done(function (element) {
                let Nombre = element.name;
                let Descripcion = element.description;
                let Content = $("<label class=\"form-label\" style=\"min-width: 100%;\">Nombre:</label>");
                Content.append($("<input type=\"text\" class=\"form-control\" id=\"NomCategory\" placeholder=\"Nombre\" style=\"min-width: 100%;\" value=\"" + Nombre + "\" />"));
                Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Descripción:</label>"));
                Content.append($("<textarea id=\"DescripCategory\" class=\"form-control\ style=\"min-width: 100%\" rows=\"5\">" + Descripcion + "</textarea>"));
                $('#content-popup').append(Content);
                myModal.show();

            });
        } else if (Modulo == "Clientes") {
            HeaderFooterPopup("Actualizar Cliente", "Actualizar");
            $.when(GetClienteById(IdData)).done(function (element) {
                let Nombre = element.name;
                let Email = element.email;
                let Edad = element.age;
                let Password = element.password;
                let Content = $("<label class=\"form-label\" style=\"min-width: 100%;\">Nombre:</label>");
                Content.append($("<input type=\"text\" class=\"form-control\" id=\"NomCli\" placeholder=\"Nombre\" style=\"min-width: 100%;\" value=\"" + Nombre + "\" />"));
                Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Email:</label>"));
                Content.append($("<input type=\"email\" class=\"form-control\" id=\"EmailCli\" placeholder=\"Email\" style=\"min-width: 100%;\" value=\"" + Email + "\" />"));
                Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Contraseña:</label>"));
                Content.append($("<input type=\"password\" class=\"form-control\" id=\"PasswordCli\" placeholder=\"Password\" style=\"min-width: 100%;\" value=\"" + Password + "\" />"));
                Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Edad:</label>"));
                Content.append($("<input type=\"number\" class=\"form-control\" id=\"EdadCli\" placeholder=\"Edad\" style=\"min-width: 100%;\" value=\"" + Edad + "\" />"));
                $('#content-popup').append(Content);
                myModal.show();
            });
        } else if (Modulo == "Mensajes") {
            HeaderFooterPopup("Actualizar Mensaje", "Actualizar");
            $.when(GetMensajeById(IdData)).done(function (element) {
                let MensajeText = element.messageText;
                let IdCabinMessage = element.messageText;
                let Content = ($("<label class=\"form-label\" style=\"min-width: 100%;\">Id Cabaña:</label>"));
                Content.append($("<input type=\"number\" class=\"form-control\" id=\"CabinMessageUpdate\" placeholder=\"Id Cabaña\" style=\"min-width: 100%;\" value=\"" + IdCabinMessage + "\" />"));
                Content.append($("<label for=\"exampleFormControlTextarea1\" class=\"form-label\">Mensaje:</label><textarea id=\"ValMensaje\" class=\"form-control\ style=\"min-width: 100%\" rows=\"5\">" + MensajeText + "</textarea>"));
                $('#content-popup').append(Content);
                myModal.show();
            });
        } else if (Modulo == "Reservas") {
            HeaderFooterPopup("Actualizar Reserva", "Actualizar");
            $.when(GetReservaById(IdData)).done(function (element) {
                let FechaInicio = element.startDate;
                let FechaFin = element.devolutionDate;
                let IdReservaCabin = element.cabin.id;
                let Content = $("<label class=\"form-label\" style=\"min-width: 100%;\">Fecha Inicio:</label>");
                Content.append($("<input type=\"text\" class=\"form-control\" id=\"FechaInicioReservationUpdate\" placeholder=\"Fecha Inicio\" style=\"min-width: 100%;\" value=\"" + FechaInicio + "\" />"));
                Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Fecha Fin:</label>"));
                Content.append($("<input type=\"text\" class=\"form-control\" id=\"FechaFinReservationUpdate\" placeholder=\"Fecha Fin\" style=\"min-width: 100%;\" value=\"" + FechaFin + "\" />"));
                Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Id Cabaña:</label>"));
                Content.append($("<input type=\"number\" class=\"form-control\" id=\"CabinReservationUpdate\" placeholder=\"Id Cabaña\" style=\"min-width: 100%;\" value=\"" + IdReservaCabin + "\" />"));
                $('#content-popup').append(Content);
                myModal.show();
            });
        }
    } else {
        alert("Debe seleccionar " + Modulo);
    }
});
//EVENTO BOTON CREAR
const btnCrear = document.getElementById("btnCrear");
btnCrear.addEventListener("click", function (event) {
    Opcion = 1;
    $('#content-popup').empty();
    if (Modulo == "Cabañas") {
        HeaderFooterPopup("Crear Cabaña", "Crear");
        let Content = $("<label class=\"form-label\" style=\"min-width: 100%;\">Nombre:</label>");
        Content.append($("<input type=\"text\" class=\"form-control\" id=\"NomCabinCreate\" placeholder=\"Nombre\" style=\"min-width: 100%;\" value=\"\" />"));
        Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Nro. Tipo de cabaña:</label>"));
        Content.append($("<input type=\"text\" class=\"form-control\" id=\"TipoCabinCreate\" placeholder=\"Tipo\" style=\"min-width: 100%;\" value=\"\" />"));
        Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Habitaciones:</label>"));
        Content.append($("<input type=\"number\" class=\"form-control\" id=\"HabiCabinCreate\" placeholder=\"Habitaciones\" style=\"min-width: 100%;\" value=\"\" />"));
        Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Id Categoria:</label>"));
        Content.append($("<input type=\"number\" class=\"form-control\" id=\"CateCabinCreate\" placeholder=\"Id Categoria\" style=\"min-width: 100%;\" value=\"\" />"));
        Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Descripción:</label>"));
        Content.append($("<textarea id=\"DescCabinCreate\" class=\"form-control\ style=\"min-width: 100%\" rows=\"5\"></textarea>"));
        $('#content-popup').append(Content);
        myModal.show();
    } else if (Modulo == "Categoria") {
        HeaderFooterPopup("Crear Categoria", "Crear");
        let Content = $("<label class=\"form-label\" style=\"min-width: 100%;\">Nombre:</label>");
        Content.append($("<input type=\"text\" class=\"form-control\" id=\"NomCategoryCreate\" placeholder=\"Nombre\" style=\"min-width: 100%;\" value=\"\" />"));
        Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Descripción:</label>"));
        Content.append($("<textarea id=\"DescripCategoryCreate\" class=\"form-control\ style=\"min-width: 100%\" rows=\"5\"></textarea>"));
        $('#content-popup').append(Content);
        myModal.show();
    } else if (Modulo == "Clientes") {
        HeaderFooterPopup("Crear Cliente", "Crear");
        let Content = $("<label class=\"form-label\" style=\"min-width: 100%;\">Nombre:</label>");
        Content.append($("<input type=\"text\" class=\"form-control\" id=\"NomCliCreate\" placeholder=\"Nombre\" style=\"min-width: 100%;\" value=\"\" />"));
        Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Email:</label>"));
        Content.append($("<input type=\"email\" class=\"form-control\" id=\"EmailCliCreate\" placeholder=\"Email\" style=\"min-width: 100%;\" value=\"\" />"));
        Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Contraseña:</label>"));
        Content.append($("<input type=\"password\" class=\"form-control\" id=\"PasswordCliCreate\" placeholder=\"Password\" style=\"min-width: 100%;\" value=\"\" />"));
        Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Edad:</label>"));
        Content.append($("<input type=\"number\" class=\"form-control\" id=\"EdadCliCreate\" placeholder=\"Edad\" style=\"min-width: 100%;\" value=\"\" />"));
        $('#content-popup').append(Content);
        myModal.show();
    } else if (Modulo == "Mensajes") {
        HeaderFooterPopup("Crear Mensaje", "Crear");
        let Content = ($("<label class=\"form-label\" style=\"min-width: 100%;\">Id Cabaña:</label>"));
        Content.append($("<input type=\"number\" class=\"form-control\" id=\"CabinMessageCreate\" placeholder=\"Id Categoria\" style=\"min-width: 100%;\" value=\"\" />"));
        Content.append($("<label for=\"exampleFormControlTextarea1\" class=\"form-label\">Mensaje:</label><textarea id=\"CreateMensaje\" class=\"form-control\ style=\"min-width: 100%\" rows=\"5\"></textarea>"));
        $('#content-popup').append(Content);
        myModal.show();
    } else if (Modulo == "Reservas") {
        HeaderFooterPopup("Crear Reserva", "Crear");
        let Content = $("<label class=\"form-label\" style=\"min-width: 100%;\">Fecha Inicio:</label>");
        Content.append($("<input type=\"text\" class=\"form-control\" id=\"FechaInicioReservationCreate\" placeholder=\"Fecha Inicio\" style=\"min-width: 100%;\" value=\"\" />"));
        Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Fecha Fin:</label>"));
        Content.append($("<input type=\"text\" class=\"form-control\" id=\"FechaFinReservationCreate\" placeholder=\"Fecha Fin\" style=\"min-width: 100%;\" value=\"\" />"));
        Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Id Cabaña:</label>"));
        Content.append($("<input type=\"number\" class=\"form-control\" id=\"CabinReservationCreate\" placeholder=\"Id Cabaña\" style=\"min-width: 100%;\" value=\"\" />"));
        $('#content-popup').append(Content);
        myModal.show();
    }
});
//EVENTO BOTON ELIMINAR
const btnEliminar = document.getElementById("btnEliminar");
btnEliminar.addEventListener("click", function (event) {
    IdData = GetDataRowSelected(Modulo);
    if (IdData != null) {
        if (Modulo == "Cabañas") {
            $.when(GetCabanaById(IdData)).done(function (element) {
                if (Object.keys(element).length !== 0) {
                    let NombreCabana = element.name;
                    if (confirm('¿Desea eliminar la cabaña ' + NombreCabana + '?')) {
                        $.when(DeleteCabanaById(IdData)).then(function (data, textStatus, jqXHR) {
                            if (jqXHR.status == "200" || jqXHR.status == "204") {
                                TablaCabanas();
                                alert("Cabaña " + NombreCabana + " eliminada correctamente.");
                            } else {
                                alert("No se pudo eliminar la cabaña. Error: " + textStatus);
                            }
                        });
                    }
                } else {
                    alert("Error al consultar la cabaña. Id: " + IdData);
                }
            });
        } else if (Modulo == "Categoria") {
            $.when(GetCategoriaById(IdData)).done(function (element) {
                if (Object.keys(element).length !== 0) {
                    let NombreCategoria = element.name;
                    if (confirm('¿Desea eliminar la categoria ' + NombreCategoria + '?')) {
                        $.when(DeleteCategoriaById(IdData)).then(function (data, textStatus, jqXHR) {
                            if (jqXHR.status == "200" || jqXHR.status == "204") {
                                TablaCategoria();
                                alert("Categoria " + NombreCabana + " eliminada correctamente.");
                            } else {
                                alert("No se pudo eliminar la Categoria. Error: " + textStatus);
                            }
                        });
                    }
                } else {
                    alert("Error al consultar la categoria. Id: " + IdData);
                }
            });
        } else if (Modulo == "Clientes") {
            $.when(GetClienteById(IdData)).done(function (element) {
                if (Object.keys(element).length !== 0) {
                    let NombreCliente = element.name;
                    if (confirm('¿Desea eliminar el cliente ' + NombreCliente + '?')) {
                        $.when(DeleteClienteById(IdData)).then(function (data, textStatus, jqXHR) {
                            if (jqXHR.status == "200" || jqXHR.status == "204") {
                                TablaClientes();
                                alert("Cliente " + NombreCliente + " eliminado correctamente.");
                            } else {
                                alert("No se pudo eliminar el cliente. Error: " + textStatus);
                            }
                        });
                    }
                } else {
                    alert("Error al consultar el cliehte. Id: " + IdData);
                }
            });
        } else if (Modulo == "Mensajes") {
            $.when(GetMensajeById(IdData)).done(function (element) {
                if (Object.keys(element).length !== 0) {
                    let MensajeText = element.messageText;
                    if (confirm('¿Desea eliminar el mensaje ' + MensajeText + '?')) {
                        $.when(DeleteMensajeById(IdData)).then(function (data, textStatus, jqXHR) {
                            if (jqXHR.status == "200" || jqXHR.status == "204") {
                                TablaMensajes();
                                alert("Mensaje " + MensajeText + " eliminado correctamente.");
                            } else {
                                alert("No se pudo eliminar el mensaje. Error: " + textStatus);
                            }
                        });
                    }
                } else {
                    alert("Error al consultar el mensaje. Id: " + IdData);
                }
            });
        } else if (Modulo == "Reservas") {
            $.when(GetReservaById(IdData)).done(function (element) {
                if (Object.keys(element).length !== 0) {
                    let FechaInicio = element.startDate;
                    let FechaFin = element.devolutionDate;
                    if (confirm('¿Desea eliminar la reserva que va entre: ' + FechaInicio + ' y ' + FechaFin + '?')) {
                        $.when(DeleteReservaById(IdData)).then(function (data, textStatus, jqXHR) {
                            if (jqXHR.status == "200" || jqXHR.status == "204") {
                                TablaReservas();
                                alert("La reserva fue eliminada correctamente.");
                            } else {
                                alert("No se pudo eliminar la reseva. Error: " + textStatus);
                            }
                        });
                    }
                } else {
                    alert("Error al consultar la reserva. Id: " + IdData);
                }
            });
        }
    } else {
        alert("Debe seleccionar " + Modulo);
    }
});
//EVENTO BOTON POPUP SALVAR
const btnSalvar = document.getElementById("Salvar");
btnSalvar.addEventListener("click", function (event) {
    if (Opcion == 0) {
        IdData = GetDataRowSelected(Modulo);
        if (IdData != null) {
            if (Modulo == "Cabañas") {
                if (confirm("¿Esta seguro que desea actualizar la cabaña?")) {
                    let NombreCabin = $('#NomCabin').val();
                    let TipoCabin = $('#TipoCabin').val();
                    let HabitaCabin = $('#HabiCabin').val();
                    let Id_CatCabin = $('#CateCabin').val();
                    let DescCabin = $('#DescCabin').val();
                    $.when(PutCabanaById(IdData, NombreCabin, TipoCabin, HabitaCabin, Id_CatCabin, DescCabin)).then(function (data, textStatus, jqXHR) {
                        if (jqXHR.status == "200" || jqXHR.status == "204" || jqXHR.status == "201") {
                            TablaCabanas();
                            alert("Cabaña actualizada correctamente.");
                            myModal.hide();
                        } else {
                            alert("No se pudo actualizar la Cabaña. Error: " + textStatus);
                        }
                    });
                }
            } else if (Modulo == "Categoria") {
                if (confirm("¿Esta seguro que desea actualizar la categoria?")) {
                    let NombreCat = $('#NomCategory').val();
                    let DescripCat = $('#DescripCategory').val();
                    $.when(PutCategoriaById(IdData, NombreCat, DescripCat)).then(function (data, textStatus, jqXHR) {
                        if (jqXHR.status == "200" || jqXHR.status == "204" || jqXHR.status == "201") {
                            TablaCategoria();
                            alert("Categoria actualizada correctamente.");
                            myModal.hide();
                        } else {
                            alert("No se pudo actualizar la categoria. Error: " + textStatus);
                        }
                    });
                }
            } else if (Modulo == "Clientes") {
                if (confirm("¿Esta seguro que desea actualizar el cliente?")) {
                    let NombreCli = $('#NomCli').val();
                    let EmailCli = $('#EmailCli').val();
                    let EdadCli = $('#EdadCli').val();
                    let PasswordCli = $('#PasswordCli').val();
                    $.when(PutClienteById(IdData, NombreCli, EmailCli, EdadCli, PasswordCli)).then(function (data, textStatus, jqXHR) {
                        if (jqXHR.status == "200" || jqXHR.status == "204" || jqXHR.status == "201") {
                            TablaClientes();
                            alert("Cliente actualizado correctamente.");
                            myModal.hide();
                        } else {
                            alert("No se pudo actualizar el cliente. Error: " + textStatus);
                        }
                    });
                }
            } else if (Modulo == "Mensajes") {
                if (confirm("¿Esta seguro que desea actualizar el mensaje?")) {
                    let MensajeMen = $('#ValMensaje').val();
                    let Id_Cabin = $('#CabinMessageUpdate').val();
                    $.when(PutMensajeById(IdData, MensajeMen, Id_Cabin)).then(function (data, textStatus, jqXHR) {
                        if (jqXHR.status == "200" || jqXHR.status == "204" || jqXHR.status == "201") {
                            TablaMensajes();
                            alert("Mensaje actualizado correctamente.");
                            myModal.hide();
                        } else {
                            alert("No se pudo actualizar el mensaje. Error: " + textStatus);
                        }
                    });
                }
            } else if (Modulo == "Reservas") {
                if (confirm("¿Esta seguro que desea actualizar la reserva?")) {
                    let FechaInicio = $('#FechaInicioReservationUpdate').val();
                    let FechaFin = $('#FechaFinReservationUpdate').val();
                    let Id_Cabin = $('#CabinReservationUpdate').val();
                    $.when(PutReservaById(IdData, FechaInicio, FechaFin, Id_Cabin)).then(function (data, textStatus, jqXHR) {
                        if (jqXHR.status == "200" || jqXHR.status == "204" || jqXHR.status == "201") {
                            TablaReservas();
                            alert("Reserva actualizada correctamente.");
                            myModal.hide();
                        } else {
                            alert("No se pudo actualizar la reserva. Error: " + textStatus);
                        }
                    });
                }
            }

        }
    } else if (Opcion == 1) {
        if (Modulo == "Cabañas") {
            let NombreCabin = $('#NomCabinCreate').val();
            let TipoCabin = $('#TipoCabinCreate').val();
            let HabitaCabin = $('#HabiCabinCreate').val();
            let Id_CatCabin = $('#CateCabinCreate').val();
            let DescCabin = $('#DescCabinCreate').val();
            $.when(PostCabana(NombreCabin, TipoCabin, HabitaCabin, Id_CatCabin, DescCabin)).then(function (data, textStatus, jqXHR) {
                if (jqXHR.status == "200" || jqXHR.status == "204" || jqXHR.status == "201") {
                    TablaCabanas();
                    alert("Cabaña creada correctamente.");
                    myModal.hide();
                } else {
                    alert("No se pudo crear la cabaña. Error: " + textStatus);
                }
            });

        } else if (Modulo == "Categoria") {
            let NombreCat = $('#NomCategoryCreate').val();
            let DescripCat = $('#DescripCategoryCreate').val();
            $.when(PostCategoria(NombreCat, DescripCat)).then(function (data, textStatus, jqXHR) {
                if (jqXHR.status == "200" || jqXHR.status == "204" || jqXHR.status == "201") {
                    TablaCategoria();
                    alert("Categoria creada correctamente.");
                    myModal.hide();
                } else {
                    alert("No se pudo crear la categoria. Error: " + textStatus);
                }
            });

        } else if (Modulo == "Clientes") {
            let NombreCli = $('#NomCliCreate').val();
            let EmailCli = $('#EmailCliCreate').val();
            let EdadCli = $('#EdadCliCreate').val();
            let PassCli = $('#PasswordCliCreate').val();
            $.when(PostCliente(NombreCli, EmailCli, EdadCli, PassCli)).then(function (data, textStatus, jqXHR) {
                if (jqXHR.status == "200" || jqXHR.status == "204" || jqXHR.status == "201") {
                    TablaClientes();
                    alert("Cliente creado correctamente.");
                    myModal.hide();
                } else {
                    alert("No se pudo crear el cliente. Error: " + textStatus);
                }
            });

        } else if (Modulo == "Mensajes") {
            let MensajeMen = $('#CreateMensaje').val();
            let Id_Cabin = $('#CabinMessageCreate').val();
            $.when(PostMensaje(MensajeMen, Id_Cabin)).then(function (data, textStatus, jqXHR) {
                if (jqXHR.status == "200" || jqXHR.status == "204" || jqXHR.status == "201") {
                    TablaMensajes();
                    alert("Mensaje creado correctamente.");
                    myModal.hide();
                } else {
                    alert("No se pudo crear el mensaje. Error: " + textStatus);
                }
            });
        } else if (Modulo == "Reservas") {
            let FechaInicio = $('#FechaInicioReservationCreate').val();
            let FechaFin = $('#FechaFinReservationCreate').val();
            let Id_Cabin = $('#CabinReservationCreate').val();
            $.when(PostReserva(FechaInicio, FechaFin, Id_Cabin)).then(function (data, textStatus, jqXHR) {
                if (jqXHR.status == "200" || jqXHR.status == "204" || jqXHR.status == "201") {
                    TablaReservas();
                    alert("Reserva creada correctamente.");
                    myModal.hide();
                } else {
                    alert("No se pudo crear la reserva. Error: " + textStatus);
                }
            });
        }
    }
});
var SelectedRow = null;
/*********** OBTENER INFORMACION DE LA LINEA SELECCIONADA ***********/
function GetDataRowSelected(param) {
    let Datos = null;
    let Id = null;
    let TableSelected = (param == "Cabañas") ? '#tablaCabana' : (param == "Categoria") ? "#tablaCategoria" : (param == "Clientes") ?
        '#tablaClientes' : (param == "Mensajes") ? '#tablaMensajes' : (param == "Reservas") ? '#tablaReservas' : '';
    TableSelected += ' .highlight';
    $(TableSelected).each(function () {
        Id = $(this).find(".id").html();
    });
    if (Id != null)
        Datos = Id;
    return Datos;
}
/*********** OBTENER MODAL PARA ACTUALIZAR Y CREAR INFORMACION ***********/
var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
})
//CAMBIAR EL TITULO Y EL NOMBRE DE BOTONES DEL MODAL
function HeaderFooterPopup(tittle, modebutton) {
    document.getElementsByClassName('modal-title')[0].innerHTML = tittle;
    document.getElementById('Salvar').innerHTML = modebutton;
}
//METODO QUE SE EJECUTA AL CARGAR LA PAGINA
$(document).ready(function () {
    TablaCabanas();
    Modulo = "Cabañas";
});