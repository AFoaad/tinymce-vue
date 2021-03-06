var tinymce = window.tinymce

tinymce.PluginManager.add("insertdatetime", function (a) {
    function b(b, c) {
        function d(a, b) {
            if (a = "" + a, a.length < b)
                for (var c = 0; c < b - a.length; c++) a = "0" + a;
            return a
        }
        return c = c || new Date, b = b.replace("%D", "%m/%d/%Y"), b = b.replace("%r", "%I:%M:%S %p"), b = b.replace("%Y", "" + c.getFullYear()), b = b.replace("%y", "" + c.getYear()), b = b.replace("%m", d(c.getMonth() + 1, 2)), b = b.replace("%d", d(c.getDate(), 2)), b = b.replace("%H", "" + d(c.getHours(), 2)), b = b.replace("%M", "" + d(c.getMinutes(), 2)), b = b.replace("%S", "" + d(c.getSeconds(), 2)), b = b.replace("%I", "" + ((c.getHours() + 11) % 12 + 1)), b = b.replace("%p", "" + (c.getHours() < 12 ? "AM" : "PM")), b = b.replace("%B", "" + a.translate(i[c.getMonth()])), b = b.replace("%b", "" + a.translate(h[c.getMonth()])), b = b.replace("%A", "" + a.translate(g[c.getDay()])), b = b.replace("%a", "" + a.translate(f[c.getDay()])), b = b.replace("%%", "%")
    }

    function c(c) {
        var d = b(c);
        if (a.settings.insertdatetime_element) {
            var e;
            e = b(/%[HMSIp]/.test(c) ? "%Y-%m-%dT%H:%M" : "%Y-%m-%d"), d = '<time datetime="' + e + '">' + d + "</time>";
            var f = a.dom.getParent(a.selection.getStart(), "time");
            if (f) return void a.dom.setOuterHTML(f, d)
        }
        a.insertContent(d)
    }
    var d, e, f = "Sun Mon Tue Wed Thu Fri Sat Sun".split(" "),
        g = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "),
        h = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        i = "January February March April May June July August September October November December".split(" "),
        j = [];
    a.addCommand("mceInsertDate", function () {
        c(a.getParam("insertdatetime_dateformat", a.translate("%Y-%m-%d")))
    }), a.addCommand("mceInsertTime", function () {
        c(a.getParam("insertdatetime_timeformat", a.translate("%H:%M:%S")))
    }), a.addButton("insertdatetime", {
        type: "splitbutton",
        title: "Insert date/time",
        onclick: function () {
            c(d || e)
        },
        menu: j
    }), tinymce.each(a.settings.insertdatetime_formats || ["%H:%M:%S", "%Y-%m-%d", "%I:%M:%S %p", "%D"], function (a) {
        e || (e = a), j.push({
            text: b(a),
            onclick: function () {
                d = a, c(a)
            }
        })
    }), a.addMenuItem("insertdatetime", {
        icon: "date",
        text: "Insert date/time",
        menu: j,
        context: "insert"
    })
});