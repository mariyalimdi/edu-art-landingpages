document.addEventListener("DOMContentLoaded", function() {
    let t = !1;
    window.addEventListener("scroll", () => {
        t || (requestAnimationFrame( () => {
            T(),
            t = !1
        }
        ),
        t = !0)
    }
    ),
    T(),
    W(),
    Y(),
    X(),
    j()
});
let w = !1;
const k = document.querySelectorAll(".course-category-tab")
  , D = document.querySelectorAll(".course-category-pane");
k.forEach(t => {
    t.addEventListener("mouseenter", function() {
        const n = this.getAttribute("data-tab");
        let e = this.getElementsByTagName("a")[0];
        k.forEach(o => {
            o.getElementsByTagName("a")[0].classList.remove("text-white", "bg-blue-700")
        }
        ),
        e.classList.add("text-white", "bg-blue-700"),
        D.forEach(o => {
            o.id === n ? o.classList.remove("hidden") : o.classList.add("hidden")
        }
        )
    })
}
);
const O = document.getElementById("open-mobile-menu-btn")
  , _ = document.getElementById("close-mobile-menu-btn")
  , I = document.getElementById("mobile-menu-slide-over")
  , p = document.getElementById("mobile-menu-overlay");
O.addEventListener("click", () => {
    I.classList.remove("translate-x-full"),
    p.classList.remove("hidden"),
    p.classList.remove("opacity-0", "pointer-events-none"),
    p.classList.add("opacity-100", "pointer-events-auto")
}
);
_.addEventListener("click", () => {
    I.classList.add("translate-x-full"),
    setTimeout(function() {
        p.classList.remove("opacity-100", "pointer-events-auto"),
        p.classList.add("opacity-0", "pointer-events-none"),
        setTimeout(function() {
            p.classList.add("hidden")
        }, 300)
    }, 150)
}
);
p.addEventListener("click", () => {
    I.classList.add("translate-x-full"),
    setTimeout(function() {
        p.classList.remove("opacity-100", "pointer-events-auto"),
        p.classList.add("opacity-0", "pointer-events-none"),
        setTimeout(function() {
            p.classList.add("hidden")
        }, 300)
    }, 150)
}
);
const P = document.querySelectorAll(".mobile-dropdown-btn");
P.forEach(t => {
    t.addEventListener("click", function() {
        const n = document.getElementById(t.getAttribute("data-dropdown"))
          , e = t.getAttribute("data-status") === "closed";
        requestAnimationFrame( () => {
            const o = e ? n.scrollHeight : 0;
            n.style.maxHeight = o + "px",
            t.setAttribute("data-status", e ? "open" : "closed"),
            t.querySelector("svg").classList.toggle("rotate-90", e)
        }
        )
    })
}
);
let B = null;
function T() {
    const t = document.getElementById("footer-sticky")
      , n = window.scrollY > 100;
    n !== B && (B = n,
    requestAnimationFrame( () => {
        t.classList.toggle("-bottom-12", !n),
        t.classList.toggle("bottom-0", n)
    }
    ))
}
function u(t) {
    return t === "" || t === null || t === void 0
}
window.isEmpty = u;
const V = document.querySelectorAll(".sa-submit-button");
V.forEach(t => {
    t.removeAttribute("disabled")
}
);
function f(t) {
    if (w)
        return !1;
    t === "sa-video-modal" && document.getElementById("sa-modal-video-player").play();
    const n = document.getElementById(t)
      , e = n.querySelector(".modal-backdrop")
      , o = n.querySelector(".modal-content");
    n.classList.remove("hidden"),
    setTimeout(function() {
        e.classList.remove("bg-black-0", "pointer-events-none"),
        e.classList.add("bg-black-70"),
        o.classList.remove("opacity-0", "pointer-events-none", "scale-50"),
        o.classList.add("opacity-100", "scale-100")
    }, 0),
    w = !0
}
window.openModal = f;
const R = document.querySelectorAll("[data-modal]");
R.forEach(function(t) {
    t.addEventListener("click", function() {
        if (w)
            return !1;
        const n = this.getAttribute("data-modal")
          , e = document.getElementById(n);
        if (n === "sa-form-modal") {
            const o = this.getAttribute("data-modal-desktop-img")
              , s = this.getAttribute("data-modal-mobile-img")
              , r = this.getAttribute("data-modal-title")
              , a = this.getAttribute("data-modal-tagline");
            let i = this.getAttribute("data-modal-visible");
            const d = this.getAttribute("data-modal-channel")
              , c = this.getAttribute("data-modal-enquiry-for")
              , l = this.getAttribute("data-modal-response")
              , m = this.getAttribute("data-modal-response-content")
              , g = document.getElementById("sa-form-modal-desktop-img")
              , h = document.getElementById("sa-form-modal-mobile-img");
            u(o) ? (g.parentElement.classList.add("hidden"),
            g.parentElement.classList.remove("md:block"),
            g.parentElement.parentElement.classList.remove("md:grid-cols-2"),
            g.parentElement.parentElement.parentElement.parentElement.classList.add("md:max-w-lg"),
            g.parentElement.parentElement.parentElement.parentElement.classList.remove("md:max-w-3xl")) : (g.parentElement.parentElement.parentElement.parentElement.classList.remove("md:max-w-lg"),
            g.parentElement.parentElement.parentElement.parentElement.classList.add("md:max-w-3xl"),
            g.parentElement.parentElement.classList.add("md:grid-cols-2"),
            g.parentElement.classList.add("hidden", "md:block"),
            g.style.backgroundImage = 'url("' + o + '")'),
            u(s) ? (h.parentElement.classList.add("hidden"),
            h.parentElement.classList.remove("md:hidden")) : (h.parentElement.classList.add("md:hidden"),
            h.parentElement.classList.remove("hidden"),
            h.style.backgroundImage = 'url("' + s + '")'),
            document.getElementById("sa-form-modal-title").innerHTML = r,
            document.getElementById("sa-form-modal-tagline").innerHTML = a,
            u(i) || (i = i.split(","),
            document.querySelectorAll(".default-hidden").forEach(function(A) {
                A.classList.add("hidden")
            }),
            i.forEach(function(A) {
                document.querySelector(".sa-" + A.trim()).classList.remove("hidden")
            })),
            u(d) || (e.querySelector('input[name="lead_channel"]').value = d),
            u(c) || (e.querySelector('input[name="enquiry_for"]').value = c),
            e.querySelector(".sa-modal-form").setAttribute("data-response-type", l),
            u(m) || e.querySelector(".sa-modal-form").setAttribute("data-response-content", m)
        }
        f(n)
    })
});
function S(t) {
    const n = document.getElementById(t)
      , e = n.querySelector(".modal-backdrop")
      , o = n.querySelector(".modal-content");
    if (e.classList.remove("bg-black-70"),
    e.classList.add("bg-black-0", "pointer-events-none"),
    o.classList.remove("opacity-100", "scale-100"),
    o.classList.add("opacity-0", "pointer-events-none", "scale-50"),
    setTimeout(function() {
        n.classList.add("hidden")
    }, 300),
    w = !1,
    t === "sa-video-modal") {
        const s = document.getElementById("sa-modal-video-player");
        s.pause(),
        s.classList.add("hidden")
    }
    t === "sa-form-modal" && document.querySelectorAll(".sa-input-holder").forEach(function(r) {
        r.querySelector(".sa-error-container").innerHTML = ""
    })
}
window.closeModal = S;
const U = document.querySelectorAll("[data-dismiss-modal]");
U.forEach(function(t) {
    t.addEventListener("click", function() {
        S(this.getAttribute("data-dismiss-modal"))
    })
});
const G = document.querySelectorAll(".custom-select-box");
G.forEach(function(t) {
    ["blur", "change"].forEach(function(e) {
        t.addEventListener(e, function() {
            const o = this.value
              , s = this.parentNode.querySelector(".custom-select-box-label");
            u(o) ? (s.classList.remove("scale-75", "-translate-y-5.5"),
            s.classList.add("translate-y-0", "scale-100")) : (s.classList.remove("translate-y-0", "scale-100"),
            s.classList.add("scale-75", "-translate-y-5.5"))
        })
    })
});
function y(t, n) {
    document.querySelectorAll(".sa-input-holder").forEach(function(s) {
        s.querySelector(".sa-error-container").innerHTML = ""
    });
    const o = document.getElementById("sa-input-error-template").content.cloneNode(!0);
    return o.querySelector("#sa-input-error-template-v1").textContent = n,
    t.querySelector(".sa-error-container").appendChild(o),
    t.querySelector(".sa-input ").focus(),
    !1
}
window.showErrorMessage = y;
function q(t, n) {
    document.querySelectorAll(".sa-input-holder").forEach(function(s) {
        s.querySelector(".sa-error-container").innerHTML = ""
    });
    const o = document.getElementById("sa-hidden-input-error-template").content.cloneNode(!0);
    return o.querySelector("#sa-hidden-input-error-template-v1").textContent = n,
    t.querySelector(".sa-error-container").appendChild(o),
    !1
}
window.showHiddenInputErrorMessage = q;
const N = document.querySelectorAll("[data-error-hide]");
N.forEach(function(t) {
    const n = t.getAttribute("data-error-hide");
    t.addEventListener(n, function() {
        let e = this.parentElement.parentElement.querySelector(".sa-error-container");
        u(e) && (e = this.parentElement.parentElement.parentElement.querySelector(".sa-error-container")),
        e.innerHTML = ""
    })
});
function x(t) {
    const n = document.getElementById("sa-ui-blocker-template").content.cloneNode(!0);
    t.appendChild(n)
}
window.blockUI = x;
function E() {
    document.getElementById("saUiBlocker") && document.getElementById("saUiBlocker").remove()
}
window.unblockUI = E;
function M(t) {
    t.querySelectorAll(".sa-required-input-holder").forEach(function(e) {
        e.classList.contains("hidden") || (e.querySelector(".sa-input").value = "")
    })
}
window.clearInputs = M;
function $(t) {
    const n = document.createElement("a");
    n.href = t,
    n.target = "_blank",
    document.body.appendChild(n),
    n.click(),
    document.body.removeChild(n)
}
function W() {
    const t = document.getElementById("sa-video-modal").querySelector(".modal-content");
    x(t);
    const n = document.getElementById("sa-modal-video-player");
    n.addEventListener("loadeddata", () => {
        E(),
        n.classList.remove("hidden")
    }
    )
}
function j() {
    document.querySelectorAll(".open-video-modal-btn").forEach(n => {
        n.addEventListener("click", function() {
            const e = this.getAttribute("data-video-url")
              , o = document.getElementById("sa-modal-video-player");
            o.src = e,
            o.load(),
            f("sa-video-modal")
        })
    }
    )
}
function H(t) {
    let n = !0;
    t.querySelectorAll(".sa-input-holder").forEach(function(r) {
        if (!r.classList.contains("hidden") && n) {
            const a = r.querySelector(".sa-input")
              , i = a.getAttribute("data-required")
              , d = a.getAttribute("data-regex")
              , c = a.getAttribute("data-maxlength");
            if (!u(i) && u(a.value)) {
                const l = a.getAttribute("data-required-msg");
                n = y(r, l)
            } else if (!u(a.value) && !u(d)) {
                if (!new RegExp(d).test(a.value)) {
                    const m = a.getAttribute("data-regex-msg");
                    n = y(r, m)
                }
            } else if (!u(c) && a.value.length > parseInt(c)) {
                const l = a.getAttribute("data-maxlength-msg");
                n = y(r, l)
            }
        }
    });
    const o = t.querySelector('[name="sa-terms-conditions"]');
    !o.checked && n && (n = q(o.parentElement.parentElement.parentElement, "You need to agree to edu-art’s Terms & Conditions."));
    const s = t.querySelector('[name="payment_gateway"]');
    return s && u(s.value) && n && (n = q(s.parentElement.parentElement.parentElement, "Please select a payment gateway.")),
    n
}
window.validateSaForm = H;
const z = document.querySelectorAll(".sa-modal-form");
z.forEach(function(t) {
    t.addEventListener("submit", function(n) {
        n.preventDefault();
        const e = this;
        if (H(e)) {
            const s = new FormData(e);
            let r = s.get("phone_number")
              , a = e.querySelector('input[data-name="dialCode"]').value;
            s.set("phone_number", "+" + a + r);
            const i = e.getAttribute("data-response-type")
              , d = e.getAttribute("data-response-content");
            x(e),
            fetch(e.getAttribute("action"), {
                method: "POST",
                body: s
            }).then(function(c) {
                if (!c.ok && c.status !== 422)
                    throw new Error("There was a problem while connecting to server.");
                return c.json()
            }).then(function(c) {
                if (c.status)
                    if (E(),
                    M(e),
                    typeof gtag == "function" && gtag("event", "thankyou_modal"),
                    S("sa-form-modal"),
                    i === "info")
                        f("sa-success-modal");
                    else if (i === "download")
                        f("sa-success-modal"),
                        $(d);
                    else if (i === "video") {
                        const l = document.getElementById("sa-modal-video-player");
                        l.src = d,
                        l.load(),
                        f("sa-video-modal")
                    } else
                        i === "redirect" && setTimeout(function() {
                            window.location = d
                        }, 200);
                else if (c.code === 422) {
                    E();
                    for (const l in c.data)
                        if (c.data.hasOwnProperty(l)) {
                            let m = e.querySelector('input[name="' + l + '"]').parentElement.parentElement;
                            (l === "phone_number" || l === "sa-terms-conditions" || l === "sa-promotional-consent") && (m = e.querySelector('input[name="' + l + '"]').parentElement.parentElement.parentElement),
                            l === "sa-terms-conditions" || l === "sa-promotional-consent" ? q(m, c.data[l]) : y(m, c.data[l])
                        }
                } else
                    throw new Error("There was a problem while processing your request.")
            }).catch(function(c) {
                E(),
                S("sa-form-modal"),
                f("sa-error-modal"),
                console.error("Error:", c)
            })
        }
    })
});
const C = document.querySelectorAll(".sa-video-player");
if (C.length) {
    let t = function(n) {
        n.parentElement.parentElement.querySelector(".sa-video-player").play()
    };
    var le = t;
    window.playVideo = t,
    C.forEach(function(n) {
        n.addEventListener("play", () => {
            n.parentElement.classList.remove("paused"),
            n.parentElement.classList.add("playing")
        }
        ),
        n.addEventListener("pause", () => {
            n.parentElement.classList.remove("playing"),
            n.parentElement.classList.add("paused")
        }
        )
    })
}
function Y() {
    const t = document.querySelectorAll(".sa-lazy");
    if ("IntersectionObserver"in window) {
        const n = new IntersectionObserver(function(e) {
            e.forEach(function(o) {
                if (o.isIntersecting) {
                    const s = o.target;
                    let r = new Image;
                    r.src = s.getAttribute("data-src"),
                    r.onload = function() {
                        s.src = s.getAttribute("data-src"),
                        s.removeAttribute("data-src"),
                        n.unobserve(s)
                    }
                }
            })
        }
        );
        t.forEach(function(e) {
            n.observe(e)
        })
    } else
        t.forEach(function(n) {
            let e = new Image;
            e.src = n.getAttribute("data-src"),
            e.onload = function() {
                n.src = n.getAttribute("data-src"),
                n.removeAttribute("data-src")
            }
        })
}
function X() {
    const t = document.querySelectorAll(".sa-lazy-bg");
    if ("IntersectionObserver"in window) {
        let e = new IntersectionObserver(function(o) {
            o.forEach(function(s) {
                if (s.isIntersecting) {
                    let r = s.target;
                    n(r),
                    e.unobserve(r)
                }
            })
        }
        );
        t.forEach(function(o) {
            e.observe(o)
        })
    } else
        t.forEach(function(e) {
            n(e)
        });
    function n(e) {
        let o = new Image;
        o.src = e.getAttribute("data-bg"),
        o.onload = function() {
            e.style.backgroundImage = `url('${e.getAttribute("data-bg")}')`,
            e.removeAttribute("data-src");
            const s = e.querySelector(".placeholder");
            u(s) || s.remove()
        }
    }
}
document.addEventListener("DOMContentLoaded", function() {
    Q(),
    J(),
    K(),
    Z(),
    ee(),
    te(),
    ne(),
    oe(),
    se(),
    re(),
    ie(),
    ae()
});
function Q() {
    let t = v("utm_source");
    const n = document.referrer
      , e = "https://www.google.com/"
      , o = 21600;
    t ? b("requestSource", t, o) : (t = L("requestSource"),
    t || (n === e ? t = "Organic Search" : n && n !== e && !n.includes("edu-art.com") ? t = "Referral" : t = "Direct",
    b("requestSource", t, o))),
    document.querySelectorAll('input[name="lead_source"]').forEach(r => {
        r.value = t
    }
    )
}
function J() {
    fetch("/api/identify-request-city", {
        method: "POST"
    }).then(function(t) {
        if (!t.ok)
            throw new Error("There was a problem while connecting to server.");
        return t.json()
    }).then(function(t) {
        document.querySelectorAll('input[name="city_name"]').forEach(o => {
            o.value = t.data.city
        }
        ),
        document.querySelectorAll('input[name="state"]').forEach(o => {
            o.value = t.data.state
        }
        )
    }).catch(function(t) {
        console.error("Error:", t)
    })
}
function K() {
    let n = v("gclid");
    n ? b("utmGclid", n, 21600) : n = L("utmGclid"),
    n && document.querySelectorAll('input[name="utm_gclid"]').forEach(r => {
        r.value = n
    }
    );
    let e = v("utm_medium");
    e ? b("utmMedium", e, 21600) : e = L("utmMedium"),
    e && document.querySelectorAll('input[name="utm_medium"]').forEach(r => {
        r.value = e
    }
    );
    let o = v("utm_campaign");
    o ? b("utmCampaign", o, 21600) : o = L("utmCampaign"),
    o && document.querySelectorAll('input[name="utm_campaign"]').forEach(r => {
        r.value = o
    }
    )
}
function Z() {
    fetch("/api/countries-dropdown", {
        method: "GET"
    }).then(function(t) {
        if (!t.ok)
            throw new Error("There was a problem while connecting to server.");
        return t.text()
    }).then(function(t) {
        document.querySelectorAll(".country-dropdown-menu").forEach(s => {
            s.parentElement.insertAdjacentHTML("beforeend", t),
            s.addEventListener("click", function() {
                this.parentElement.querySelector(".country-dropdown").classList.toggle("hidden")
            })
        }
        ),
        document.addEventListener("click", function(s) {
            document.querySelectorAll(".country-dropdown-menu").forEach(a => {
                a.contains(s.target) || a.parentElement.querySelector(".country-dropdown").classList.add("hidden")
            }
            )
        });
        const e = document.querySelectorAll(".country-dropdown-item");
        e.forEach(s => {
            s.addEventListener("click", function() {
                e.forEach(d => {
                    d.classList.add("bg-white"),
                    d.classList.remove("bg-gray-100")
                }
                );
                const r = this.parentElement.parentElement;
                this.classList.remove("bg-white"),
                this.classList.add("bg-gray-100");
                const a = this.getAttribute("data-dial-code")
                  , i = this.getAttribute("data-country-code");
                r.querySelector(".selected-country-flag-holder").innerHTML = this.querySelector(".country-flag-holder").innerHTML,
                r.querySelector(".selected-country-dial-code").innerHTML = "+" + a,
                r.querySelector('input[data-name="countryCode"]').value = i,
                r.querySelector('input[data-name="dialCode"]').value = a
            })
        }
        ),
        document.querySelectorAll(".country-dropdown-menu").forEach(s => {
            const r = s.querySelector('input[data-name="countryCode"]').value;
            s.parentElement.querySelectorAll(".country-dropdown-item").forEach(i => {
                i.getAttribute("data-country-code") === r && (i.classList.remove("bg-white"),
                i.classList.add("bg-gray-100"))
            }
            )
        }
        )
    }).catch(function(t) {
        console.error("Error:", t)
    })
}
function ee() {
    document.querySelectorAll(".accordion-toggle").forEach(n => {
        n.addEventListener("click", function() {
            n.parentElement.parentElement.querySelectorAll(".accordion-toggle").forEach(function(a) {
                const i = a.nextElementSibling
                  , d = a.querySelector(".accordion-icon");
                !i.classList.contains("closed") && n !== a && (i.style.maxHeight = "0px",
                i.classList.toggle("closed"),
                d.classList.toggle("rotate-180"),
                setTimeout(function() {
                    i.classList.add("hidden")
                }, 300))
            });
            const o = this.nextElementSibling;
            this.querySelector(".accordion-icon").classList.toggle("rotate-180");
            let r = o.parentElement.parentElement;
            if (o.classList.contains("closed")) {
                o.classList.remove("hidden");
                const a = o.scrollHeight;
                requestAnimationFrame( () => {
                    o.style.maxHeight = a + "px"
                }
                ),
                r.classList.contains("toggle-view-container") && requestAnimationFrame( () => {
                    const i = r.scrollHeight + o.scrollHeight;
                    requestAnimationFrame( () => {
                        r.style.maxHeight = i + "px"
                    }
                    )
                }
                )
            } else
                o.style.maxHeight = "0px",
                r.classList.contains("toggle-view-container") && (r.style.maxHeight = r.scrollHeight + "px"),
                setTimeout(function() {
                    o.classList.add("hidden")
                }, 300);
            o.classList.toggle("closed")
        })
    }
    )
}
function te() {
    document.querySelectorAll(".sa-slider-btn").forEach(n => {
        n.addEventListener("click", function() {
            const e = document.getElementById(this.getAttribute("data-slider"))
              , o = this.parentElement.querySelector('[data-direction="next"]')
              , s = this.parentElement.querySelector('[data-direction="prev"]')
              , r = e.children
              , a = r[0].offsetWidth;
            let i = parseInt(e.getAttribute("data-current"));
            const d = this.getAttribute("data-direction");
            let c = parseInt(e.getAttribute("data-visible"));
            const l = window.innerWidth;
            l < 768 ? c = 1 : l < 1024 && (c = 2);
            const m = r.length - c;
            d === "prev" ? i > 0 && (i--,
            e.style.transform = `translateX(-${i * a}px)`,
            e.setAttribute("data-current", i.toString())) : d === "next" && i < m && (i++,
            e.style.transform = `translateX(-${i * a}px)`,
            e.setAttribute("data-current", i.toString())),
            i === 0 ? s.classList.add("opacity-40") : s.classList.remove("opacity-40"),
            i === 0 && m > 0 && o.classList.remove("opacity-40"),
            i === m ? o.classList.add("opacity-40") : o.classList.remove("opacity-40")
        })
    }
    )
}
function ne() {
    document.querySelectorAll(".toggle-view-btn").forEach(n => {
        n.addEventListener("click", function() {
            const e = this.parentElement.parentElement.querySelector("." + this.getAttribute("data-container"))
              , o = this.querySelector(".toggle-view-btn-icon");
            o.classList.toggle("rotate-180"),
            e.classList.contains("closed") ? (e.classList.remove("hidden"),
            requestAnimationFrame( () => {
                const s = e.scrollHeight;
                requestAnimationFrame( () => {
                    e.style.maxHeight = s + "px"
                }
                )
            }
            ),
            this.querySelector(".toggle-view-btn-text").innerHTML = "View Less",
            o.classList.remove("-mt-1")) : (e.style.maxHeight = "0px",
            this.querySelector(".toggle-view-btn-text").innerHTML = "View All",
            o.classList.add("-mt-1"),
            setTimeout(function() {
                e.classList.add("hidden")
            }, 1e3),
            window.scrollBy({
                top: -e.scrollHeight,
                behavior: "smooth"
            })),
            e.classList.toggle("closed")
        })
    }
    )
}
function oe() {
    document.querySelectorAll(".category-courses-tab").forEach(n => {
        n.addEventListener("mouseenter", function() {
            document.querySelectorAll(".category-courses-tab-view").forEach(e => {
                e.classList.add("hidden")
            }
            ),
            document.getElementById(this.getAttribute("data-tab")).classList.remove("hidden"),
            document.querySelectorAll(".category-courses-tab").forEach(e => {
                e.classList.add("text-slate-550"),
                e.classList.remove("bg-primary-500", "text-white")
            }
            ),
            this.classList.add("bg-primary-500", "text-white"),
            this.classList.remove("text-slate-550")
        })
    }
    )
}
function se() {
    document.querySelectorAll(".certificates-tab").forEach(n => {
        n.addEventListener("mouseenter", function() {
            document.querySelectorAll(".certificates-tab-view").forEach(e => {
                e.classList.add("hidden")
            }
            ),
            document.getElementById(this.getAttribute("data-tab")).classList.remove("hidden"),
            document.querySelectorAll(".certificates-tab").forEach(e => {
                e.classList.remove("bg-primary-150", "text-primary-950"),
                e.classList.add("text-slate-550")
            }
            ),
            this.classList.add("bg-primary-150", "text-primary-950"),
            this.classList.remove("text-slate-550")
        })
    }
    )
}
function re() {
    [".course-contents-tab", ".career-tracks-tab"].forEach(n => {
        document.querySelectorAll(n).forEach(o => {
            o.addEventListener("mouseenter", function() {
                document.querySelectorAll(n + "-view").forEach(i => {
                    i.classList.add("hidden")
                }
                ),
                document.getElementById(this.getAttribute("data-tab")).classList.remove("hidden"),
                document.querySelectorAll(n).forEach(i => {
                    const d = i.querySelector(".m-heading")
                      , c = i.querySelector(".m-info")
                      , l = i.querySelector(".m-arrow");
                    d && c && l ? (d.classList.remove("text-slate-925"),
                    c.classList.remove("text-slate-550"),
                    d.classList.add("text-minimum"),
                    c.classList.add("text-minimum"),
                    l.classList.add("hidden"),
                    i.classList.remove("bg-white-100", "border-green-550"),
                    i.classList.add("bg-white", "border-white")) : (i.classList.remove("bg-primary-150", "text-primary-950"),
                    i.classList.add("text-slate-550"))
                }
                );
                const s = this.querySelector(".m-heading")
                  , r = this.querySelector(".m-info")
                  , a = this.querySelector(".m-arrow");
                s && r && a ? (s.classList.add("text-slate-925"),
                r.classList.add("text-slate-550"),
                s.classList.remove("text-minimum"),
                r.classList.remove("text-minimum"),
                a.classList.remove("hidden"),
                this.classList.add("bg-white-100", "border-green-550"),
                this.classList.remove("bg-white", "border-white")) : (this.classList.add("bg-primary-150", "text-primary-950"),
                this.classList.remove("text-slate-550"))
            })
        }
        )
    }
    )
}
function ie() {
    const t = document.getElementById("sticky-course-header-nav");
    if (t) {
        let o = function() {
            let s = "";
            if (e.forEach(r => {
                const a = document.getElementById(r.getAttribute("data-target"))
                  , i = a.getBoundingClientRect();
                i.top <= window.innerHeight / 2 && i.bottom >= window.innerHeight / 2 && (s = a.getAttribute("id")),
                r.classList.remove("border-indigo-500", "text-indigo-600"),
                r.classList.add("border-transparent", "text-gray-600", "hover:border-gray-300", "hover:text-gray-700")
            }
            ),
            s) {
                const r = document.getElementById(`menu-${s}`);
                r && (r.classList.remove("border-transparent", "text-gray-600", "hover:border-gray-300", "hover:text-gray-700"),
                r.classList.add("border-indigo-500", "text-indigo-600"),
                window.innerWidth < 1150 && requestAnimationFrame( () => {
                    r.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "center"
                    })
                }
                ))
            }
        };
        var n = o;
        const e = t.querySelectorAll("li");
        o(),
        window.addEventListener("scroll", function() {
            o()
        }),
        e.forEach(s => {
            s.addEventListener("click", function() {
                const r = this.getAttribute("data-target");
                F(r)
            })
        }
        )
    }
}
function ae() {
    document.querySelectorAll(".smooth-scroll-btn").forEach(n => {
        n.addEventListener("click", function() {
            const e = this.getAttribute("data-scroll-target");
            F(e)
        })
    }
    )
}
function F(t) {
    const e = document.getElementById(t).getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: e - 70,
        behavior: "smooth"
    })
}
function v(t) {
    return new URLSearchParams(window.location.search).get(t)
}
function L(t) {
    const n = document.cookie.split("; ");
    for (const e of n) {
        const [o,s] = e.split("=");
        if (o === t)
            return decodeURIComponent(s)
    }
    return null
}
function b(t, n, e) {
    const o = new Date(Date.now() + e * 6e4).toUTCString();
    document.cookie = `${t}=${encodeURIComponent(n)}; expires=${o}; path=/`
}
window.onload = function() {
    function t() {
        ["https://d1qnndbrfkpp2h.cloudfront.net/js/gtag-1.2.8.min.js"].forEach(function(a) {
            const i = document.createElement("script");
            i.src = a,
            i.defer = !0,
            document.body.appendChild(i)
        })
    }
    ["click", "keydown", "touchedut", "mousemove"].forEach(r => {
        window.addEventListener(r, () => {
            window.scriptLoaded || (t(),
            window.scriptLoaded = !0)
        }
        , {
            once: !0
        })
    }
    ),
    setTimeout(function() {
        window.scriptLoaded || (t(),
        window.scriptLoaded = !0)
    }, 4e3);
    const e = document.getElementById("sa-exit-popup-initiator");
    let o = !1;
    e && document.addEventListener("mouseleave", function(r) {
        r.clientY <= 0 && (o || (e.click(),
        o = !0))
    });
    const s = document.getElementById("sa-timeout-popup-initiator");
    s && setTimeout(function() {
        s.click()
    }, 1e4)
}
;

