const yesBtn = document.getElementById('yesButton');

yesBtn.checked = true;

const noBtn = document.getElementById('noButton');

yesBtn.checked = true;

$("moreFields").click(function() {
    var clone = $("workForm .productionrows").last()
    clone.val("");
    clone.find("input, label").each(function() {
        $(this).val("");
    });
    clone.appendTo($(".productionrows"));
});