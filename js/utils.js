/**
 * @author Piotr Grudzien
 */

function position_svg(window, svg, offset) {
	svg.attr("width", window.innerWidth - 2 * offset).attr("height", window.innerHeight - 2 * offset);
}

function position_rect(svg, rect) {
	rect.attr("width", svg.attr("width")).attr("height", svg.attr("height"));
}

function position_linkedin(linkedin, rect) {
	linkedin.attr("x", rect.attr("width") * 0.01).attr("y", rect.attr("height") - rect.attr("width") * 0.05);
}

function position_email(email, rect) {
	email.attr("x", rect.attr("width") * 0.01).attr("y", rect.attr("height") - rect.attr("width") * 0.03);
}

function position_author(author, rect) {
	author.attr("x", rect.attr("width") * 0.01).attr("y", rect.attr("height") - rect.attr("width") * 0.01);
}

function post(path, params, method) {
    method = method || "post";

    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }

    document.body.appendChild(form);
    form.submit();
}