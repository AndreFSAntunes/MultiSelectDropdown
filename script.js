function createMultiSelectDropdown(options, dropdownContentId) {
    var dropdownContent = $('#' + dropdownContentId);
    options.forEach(function(option) {
        var label = $('<label>').text(option);
        var checkbox = $('<input>').attr('type', 'checkbox').val(option);
        dropdownContent.append(label.prepend(checkbox));
    });
}

function getSelectedOptions(dropdownContentId) {
    var selectedOptions = [];
    $('#' + dropdownContentId + ' input:checked').each(function() {
        selectedOptions.push($(this).val());
    });
    return selectedOptions;
}

$('#dropdown-btn').click(function() {
    var dropdownContent = $('#dropdown-content');
    if (dropdownContent.is(":hidden")) {
        dropdownContent.show();
        $(this).addClass("show");
    } else {
        dropdownContent.hide();
        $(this).removeClass("show");
    }
});

$(document).click(function(event) {
    if (!$(event.target).closest('#myDropdown').length) {
        var dropdownContent = $('#dropdown-content');
        if (dropdownContent.is(":visible")) {
            dropdownContent.hide();
            $('#dropdown-btn').removeClass("show");
        }
    }
});

var options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
createMultiSelectDropdown(options, 'dropdown-content');
