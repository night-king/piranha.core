/*global
    piranha, tinymce
*/

piranha.editor = {
    addForm: function (id) {
        tinymce.init({
            selector: "#" + id,
            menubar: false,
            branding: false,
            convert_urls: false,
            plugins: [
                "autoresize autolink code hr paste lists" // piranhaimage piranhalink"
            ],
            width: "100%",
            height: "300",
            autoresize_min_height: 340,
            content_css: ["//fonts.googleapis.com/css?family=Gentium+Book+Basic:700", "//fonts.googleapis.com/css?family=Open+Sans:300,400,600", piranha.baseUrl + "/assets/css/editor.min.css"],
            toolbar: "bold italic | bullist numlist hr | alignleft aligncenter alignright | formatselect", // | piranhalink piranhaimage",
            block_formats: 'Paragraph=p;Header 1=h1;Header 2=h2;Header 3=h3;Header 4=h4;Code=pre;Quote=blockquote',
            setup: function (editor) {
                editor.on('change', function () {
                    editor.save();
                });
            }
        });
    },
    addInline: function (id) {
        tinymce.init({
            selector: "#" + id,
            menubar: false,
            branding: false,
            statusbar: false,
            inline: true,
            convert_urls: false,
            plugins: [
                "autoresize autolink code hr paste lists" // TODO: piranhaimage piranhalink"
            ],
            width: "100%",
            autoresize_min_height: 0,
            toolbar: "bold italic | bullist numlist hr | alignleft aligncenter alignright | formatselect", // TODO: | piranhalink piranhaimage",
            block_formats: 'Paragraph=p;Header 1=h1;Header 2=h2;Header 3=h3;Header 4=h4;Code=pre;Quote=blockquote'
        });
    },
    remove: function (id) {
        tinymce.remove(tinymce.get(id));
    }
};