import {
  A as Ne,
  Aa as je,
  Ab as $r,
  Bb as Hr,
  C as cn,
  Cb as Ct,
  D as fe,
  Da as Rr,
  Db as zr,
  Eb as Fr,
  F as ht,
  Fb as Br,
  G as Y,
  Ga as wr,
  H as ln,
  I as ir,
  Ia as Er,
  J as or,
  Ja as yn,
  Ka as $,
  L as sr,
  M as D,
  Ma as Mr,
  N as un,
  O,
  P as S,
  Q as ar,
  Qa as br,
  R as y,
  Ra as Or,
  Sa as _r,
  T as cr,
  Ta as Ir,
  U as _,
  Ua as Tr,
  V as C,
  Va as Ar,
  W as f,
  Wa as Dr,
  X as lr,
  Y as ur,
  Ya as pt,
  Z as Ue,
  Za as ft,
  _ as H,
  _a as gt,
  a as d,
  ab as mt,
  b as N,
  ba as dn,
  bb as vt,
  ca as j,
  cb as J,
  da as dr,
  db as R,
  e as Jn,
  ea as hn,
  eb as w,
  f as Xn,
  fa as pn,
  fb as X,
  g as er,
  ga as hr,
  h as on,
  ha as oe,
  hb as yt,
  i as sn,
  ia as pr,
  j as K,
  ja as fr,
  k as U,
  ka as fn,
  l as q,
  m as L,
  ma as gr,
  n as h,
  na as gn,
  o as xe,
  oa as mr,
  p as tr,
  pa as Le,
  pb as M,
  q as nr,
  qb as Pr,
  r as m,
  ra as mn,
  rb as xr,
  s as an,
  sa as vn,
  sb as Nr,
  t as k,
  ta as vr,
  tb as Ur,
  u as rr,
  ua as yr,
  ub as se,
  v as dt,
  va as Q,
  vb as Lr,
  wa as ke,
  wb as kr,
  x as ie,
  xa as Cr,
  xb as jr,
  ya as Sr,
  z as pe,
  za as ge,
  zb as $e,
} from './chunk-MRH57PYF.js';
var He = class {
    _doc;
    constructor(n) {
      this._doc = n;
    }
    manager;
  },
  St = (() => {
    class t extends He {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return !0;
      }
      addEventListener(e, r, i, o) {
        return e.addEventListener(r, i, o), () => this.removeEventListener(e, r, i, o);
      }
      removeEventListener(e, r, i, o) {
        return e.removeEventListener(r, i, o);
      }
      static ɵfac = function (r) {
        return new (r || t)(C(j));
      };
      static ɵprov = y({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  wt = new _(''),
  En = (() => {
    class t {
      _zone;
      _plugins;
      _eventNameToPlugin = new Map();
      constructor(e, r) {
        (this._zone = r),
          e.forEach((s) => {
            s.manager = this;
          });
        let i = e.filter((s) => !(s instanceof St));
        this._plugins = i.slice().reverse();
        let o = e.find((s) => s instanceof St);
        o && this._plugins.push(o);
      }
      addEventListener(e, r, i, o) {
        return this._findPluginFor(r).addEventListener(e, r, i, o);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(e) {
        let r = this._eventNameToPlugin.get(e);
        if (r) return r;
        if (((r = this._plugins.find((o) => o.supports(e))), !r)) throw new S(5101, !1);
        return this._eventNameToPlugin.set(e, r), r;
      }
      static ɵfac = function (r) {
        return new (r || t)(C(wt), C(je));
      };
      static ɵprov = y({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  Cn = 'ng-app-id';
function Vr(t) {
  for (let n of t) n.remove();
}
function qr(t, n) {
  let e = n.createElement('style');
  return (e.textContent = t), e;
}
function Gi(t, n, e, r) {
  let i = t.head?.querySelectorAll(`style[${Cn}="${n}"],link[${Cn}="${n}"]`);
  if (i)
    for (let o of i)
      o.removeAttribute(Cn),
        o instanceof HTMLLinkElement
          ? r.set(o.href.slice(o.href.lastIndexOf('/') + 1), { usage: 0, elements: [o] })
          : o.textContent && e.set(o.textContent, { usage: 0, elements: [o] });
}
function Rn(t, n) {
  let e = n.createElement('link');
  return e.setAttribute('rel', 'stylesheet'), e.setAttribute('href', t), e;
}
var Mn = (() => {
    class t {
      doc;
      appId;
      nonce;
      inline = new Map();
      external = new Map();
      hosts = new Set();
      constructor(e, r, i, o = {}) {
        (this.doc = e),
          (this.appId = r),
          (this.nonce = i),
          Gi(e, r, this.inline, this.external),
          this.hosts.add(e.head);
      }
      addStyles(e, r) {
        for (let i of e) this.addUsage(i, this.inline, qr);
        r?.forEach((i) => this.addUsage(i, this.external, Rn));
      }
      removeStyles(e, r) {
        for (let i of e) this.removeUsage(i, this.inline);
        r?.forEach((i) => this.removeUsage(i, this.external));
      }
      addUsage(e, r, i) {
        let o = r.get(e);
        o
          ? o.usage++
          : r.set(e, {
              usage: 1,
              elements: [...this.hosts].map((s) => this.addElement(s, i(e, this.doc))),
            });
      }
      removeUsage(e, r) {
        let i = r.get(e);
        i && (i.usage--, i.usage <= 0 && (Vr(i.elements), r.delete(e)));
      }
      ngOnDestroy() {
        for (let [, { elements: e }] of [...this.inline, ...this.external]) Vr(e);
        this.hosts.clear();
      }
      addHost(e) {
        this.hosts.add(e);
        for (let [r, { elements: i }] of this.inline) i.push(this.addElement(e, qr(r, this.doc)));
        for (let [r, { elements: i }] of this.external) i.push(this.addElement(e, Rn(r, this.doc)));
      }
      removeHost(e) {
        this.hosts.delete(e);
      }
      addElement(e, r) {
        return this.nonce && r.setAttribute('nonce', this.nonce), e.appendChild(r);
      }
      static ɵfac = function (r) {
        return new (r || t)(C(j), C(gn), C(mn, 8), C(Le));
      };
      static ɵprov = y({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  Sn = {
    svg: 'http://www.w3.org/2000/svg',
    xhtml: 'http://www.w3.org/1999/xhtml',
    xlink: 'http://www.w3.org/1999/xlink',
    xml: 'http://www.w3.org/XML/1998/namespace',
    xmlns: 'http://www.w3.org/2000/xmlns/',
    math: 'http://www.w3.org/1998/Math/MathML',
  },
  bn = /%COMP%/g;
var Wr = '%COMP%',
  Wi = `_nghost-${Wr}`,
  Zi = `_ngcontent-${Wr}`,
  Ki = !0,
  Yi = new _('', { providedIn: 'root', factory: () => Ki });
function Qi(t) {
  return Zi.replace(bn, t);
}
function Ji(t) {
  return Wi.replace(bn, t);
}
function Zr(t, n) {
  return n.map((e) => e.replace(bn, t));
}
var On = (() => {
    class t {
      eventManager;
      sharedStylesHost;
      appId;
      removeStylesOnCompDestroy;
      doc;
      platformId;
      ngZone;
      nonce;
      tracingService;
      rendererByCompId = new Map();
      defaultRenderer;
      platformIsServer;
      constructor(e, r, i, o, s, a, c, l = null, u = null) {
        (this.eventManager = e),
          (this.sharedStylesHost = r),
          (this.appId = i),
          (this.removeStylesOnCompDestroy = o),
          (this.doc = s),
          (this.platformId = a),
          (this.ngZone = c),
          (this.nonce = l),
          (this.tracingService = u),
          (this.platformIsServer = !1),
          (this.defaultRenderer = new ze(e, s, c, this.platformIsServer, this.tracingService));
      }
      createRenderer(e, r) {
        if (!e || !r) return this.defaultRenderer;
        let i = this.getOrCreateRenderer(e, r);
        return i instanceof Rt ? i.applyToHost(e) : i instanceof Fe && i.applyStyles(), i;
      }
      getOrCreateRenderer(e, r) {
        let i = this.rendererByCompId,
          o = i.get(r.id);
        if (!o) {
          let s = this.doc,
            a = this.ngZone,
            c = this.eventManager,
            l = this.sharedStylesHost,
            u = this.removeStylesOnCompDestroy,
            v = this.platformIsServer,
            E = this.tracingService;
          switch (r.encapsulation) {
            case vn.Emulated:
              o = new Rt(c, l, r, this.appId, u, s, a, v, E);
              break;
            case vn.ShadowDom:
              return new wn(c, l, e, r, s, a, this.nonce, v, E);
            default:
              o = new Fe(c, l, r, u, s, a, v, E);
              break;
          }
          i.set(r.id, o);
        }
        return o;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
      componentReplaced(e) {
        this.rendererByCompId.delete(e);
      }
      static ɵfac = function (r) {
        return new (r || t)(C(En), C(Mn), C(gn), C(Yi), C(j), C(Le), C(je), C(mn), C(Sr, 8));
      };
      static ɵprov = y({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  ze = class {
    eventManager;
    doc;
    ngZone;
    platformIsServer;
    tracingService;
    data = Object.create(null);
    throwOnSyntheticProps = !0;
    constructor(n, e, r, i, o) {
      (this.eventManager = n),
        (this.doc = e),
        (this.ngZone = r),
        (this.platformIsServer = i),
        (this.tracingService = o);
    }
    destroy() {}
    destroyNode = null;
    createElement(n, e) {
      return e ? this.doc.createElementNS(Sn[e] || e, n) : this.doc.createElement(n);
    }
    createComment(n) {
      return this.doc.createComment(n);
    }
    createText(n) {
      return this.doc.createTextNode(n);
    }
    appendChild(n, e) {
      (Gr(n) ? n.content : n).appendChild(e);
    }
    insertBefore(n, e, r) {
      n && (Gr(n) ? n.content : n).insertBefore(e, r);
    }
    removeChild(n, e) {
      e.remove();
    }
    selectRootElement(n, e) {
      let r = typeof n == 'string' ? this.doc.querySelector(n) : n;
      if (!r) throw new S(-5104, !1);
      return e || (r.textContent = ''), r;
    }
    parentNode(n) {
      return n.parentNode;
    }
    nextSibling(n) {
      return n.nextSibling;
    }
    setAttribute(n, e, r, i) {
      if (i) {
        e = i + ':' + e;
        let o = Sn[i];
        o ? n.setAttributeNS(o, e, r) : n.setAttribute(e, r);
      } else n.setAttribute(e, r);
    }
    removeAttribute(n, e, r) {
      if (r) {
        let i = Sn[r];
        i ? n.removeAttributeNS(i, e) : n.removeAttribute(`${r}:${e}`);
      } else n.removeAttribute(e);
    }
    addClass(n, e) {
      n.classList.add(e);
    }
    removeClass(n, e) {
      n.classList.remove(e);
    }
    setStyle(n, e, r, i) {
      i & (ke.DashCase | ke.Important)
        ? n.style.setProperty(e, r, i & ke.Important ? 'important' : '')
        : (n.style[e] = r);
    }
    removeStyle(n, e, r) {
      r & ke.DashCase ? n.style.removeProperty(e) : (n.style[e] = '');
    }
    setProperty(n, e, r) {
      n != null && (n[e] = r);
    }
    setValue(n, e) {
      n.nodeValue = e;
    }
    listen(n, e, r, i) {
      if (typeof n == 'string' && ((n = $e().getGlobalEventTarget(this.doc, n)), !n))
        throw new S(5102, !1);
      let o = this.decoratePreventDefault(r);
      return (
        this.tracingService?.wrapEventListener &&
          (o = this.tracingService.wrapEventListener(n, e, o)),
        this.eventManager.addEventListener(n, e, o, i)
      );
    }
    decoratePreventDefault(n) {
      return (e) => {
        if (e === '__ngUnwrap__') return n;
        n(e) === !1 && e.preventDefault();
      };
    }
  };
function Gr(t) {
  return t.tagName === 'TEMPLATE' && t.content !== void 0;
}
var wn = class extends ze {
    sharedStylesHost;
    hostEl;
    shadowRoot;
    constructor(n, e, r, i, o, s, a, c, l) {
      super(n, o, s, c, l),
        (this.sharedStylesHost = e),
        (this.hostEl = r),
        (this.shadowRoot = r.attachShadow({ mode: 'open' })),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let u = i.styles;
      u = Zr(i.id, u);
      for (let E of u) {
        let I = document.createElement('style');
        a && I.setAttribute('nonce', a), (I.textContent = E), this.shadowRoot.appendChild(I);
      }
      let v = i.getExternalStyles?.();
      if (v)
        for (let E of v) {
          let I = Rn(E, o);
          a && I.setAttribute('nonce', a), this.shadowRoot.appendChild(I);
        }
    }
    nodeOrShadowRoot(n) {
      return n === this.hostEl ? this.shadowRoot : n;
    }
    appendChild(n, e) {
      return super.appendChild(this.nodeOrShadowRoot(n), e);
    }
    insertBefore(n, e, r) {
      return super.insertBefore(this.nodeOrShadowRoot(n), e, r);
    }
    removeChild(n, e) {
      return super.removeChild(null, e);
    }
    parentNode(n) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  Fe = class extends ze {
    sharedStylesHost;
    removeStylesOnCompDestroy;
    styles;
    styleUrls;
    constructor(n, e, r, i, o, s, a, c, l) {
      super(n, o, s, a, c), (this.sharedStylesHost = e), (this.removeStylesOnCompDestroy = i);
      let u = r.styles;
      (this.styles = l ? Zr(l, u) : u), (this.styleUrls = r.getExternalStyles?.(l));
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles, this.styleUrls);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        Cr.size === 0 &&
        this.sharedStylesHost.removeStyles(this.styles, this.styleUrls);
    }
  },
  Rt = class extends Fe {
    contentAttr;
    hostAttr;
    constructor(n, e, r, i, o, s, a, c, l) {
      let u = i + '-' + r.id;
      super(n, e, r, o, s, a, c, l, u), (this.contentAttr = Qi(u)), (this.hostAttr = Ji(u));
    }
    applyToHost(n) {
      this.applyStyles(), this.setAttribute(n, this.hostAttr, '');
    }
    createElement(n, e) {
      let r = super.createElement(n, e);
      return super.setAttribute(r, this.contentAttr, ''), r;
    }
  };
var Et = class t extends Hr {
    supportsDOMEvents = !0;
    static makeCurrent() {
      $r(new t());
    }
    onAndCancel(n, e, r, i) {
      return (
        n.addEventListener(e, r, i),
        () => {
          n.removeEventListener(e, r, i);
        }
      );
    }
    dispatchEvent(n, e) {
      n.dispatchEvent(e);
    }
    remove(n) {
      n.remove();
    }
    createElement(n, e) {
      return (e = e || this.getDefaultDocument()), e.createElement(n);
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument('fakeTitle');
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(n) {
      return n.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(n) {
      return n instanceof DocumentFragment;
    }
    getGlobalEventTarget(n, e) {
      return e === 'window' ? window : e === 'document' ? n : e === 'body' ? n.body : null;
    }
    getBaseHref(n) {
      let e = to();
      return e == null ? null : no(e);
    }
    resetBaseElement() {
      Be = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(n) {
      return zr(document.cookie, n);
    }
  },
  Be = null;
function to() {
  return (Be = Be || document.head.querySelector('base')), Be ? Be.getAttribute('href') : null;
}
function no(t) {
  return new URL(t, document.baseURI).pathname;
}
var ro = (() => {
    class t {
      build() {
        return new XMLHttpRequest();
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = y({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  Kr = ['alt', 'control', 'meta', 'shift'],
  io = {
    '\b': 'Backspace',
    '	': 'Tab',
    '\x7F': 'Delete',
    '\x1B': 'Escape',
    Del: 'Delete',
    Esc: 'Escape',
    Left: 'ArrowLeft',
    Right: 'ArrowRight',
    Up: 'ArrowUp',
    Down: 'ArrowDown',
    Menu: 'ContextMenu',
    Scroll: 'ScrollLock',
    Win: 'OS',
  },
  oo = {
    alt: (t) => t.altKey,
    control: (t) => t.ctrlKey,
    meta: (t) => t.metaKey,
    shift: (t) => t.shiftKey,
  },
  Yr = (() => {
    class t extends He {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return t.parseEventName(e) != null;
      }
      addEventListener(e, r, i, o) {
        let s = t.parseEventName(r),
          a = t.eventCallback(s.fullKey, i, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => $e().onAndCancel(e, s.domEventName, a, o));
      }
      static parseEventName(e) {
        let r = e.toLowerCase().split('.'),
          i = r.shift();
        if (r.length === 0 || !(i === 'keydown' || i === 'keyup')) return null;
        let o = t._normalizeKey(r.pop()),
          s = '',
          a = r.indexOf('code');
        if (
          (a > -1 && (r.splice(a, 1), (s = 'code.')),
          Kr.forEach((l) => {
            let u = r.indexOf(l);
            u > -1 && (r.splice(u, 1), (s += l + '.'));
          }),
          (s += o),
          r.length != 0 || o.length === 0)
        )
          return null;
        let c = {};
        return (c.domEventName = i), (c.fullKey = s), c;
      }
      static matchEventFullKeyCode(e, r) {
        let i = io[e.key] || e.key,
          o = '';
        return (
          r.indexOf('code.') > -1 && ((i = e.code), (o = 'code.')),
          i == null || !i
            ? !1
            : ((i = i.toLowerCase()),
              i === ' ' ? (i = 'space') : i === '.' && (i = 'dot'),
              Kr.forEach((s) => {
                if (s !== i) {
                  let a = oo[s];
                  a(e) && (o += s + '.');
                }
              }),
              (o += i),
              o === r)
        );
      }
      static eventCallback(e, r, i) {
        return (o) => {
          t.matchEventFullKeyCode(o, e) && i.runGuarded(() => r(o));
        };
      }
      static _normalizeKey(e) {
        return e === 'esc' ? 'escape' : e;
      }
      static ɵfac = function (r) {
        return new (r || t)(C(j));
      };
      static ɵprov = y({ token: t, factory: t.ɵfac });
    }
    return t;
  })();
function _n(t, n, e) {
  let r = d({ rootComponent: t, platformRef: e?.platformRef }, so(n));
  return jr(r);
}
function so(t) {
  return { appProviders: [...ho, ...(t?.providers ?? [])], platformProviders: uo };
}
function ao() {
  Et.makeCurrent();
}
function co() {
  return new hn();
}
function lo() {
  return gr(document), document;
}
var uo = [
  { provide: Le, useValue: Br },
  { provide: mr, useValue: ao, multi: !0 },
  { provide: j, useFactory: lo },
];
var ho = [
  { provide: ur, useValue: 'root' },
  { provide: hn, useFactory: co },
  { provide: wt, useClass: St, multi: !0, deps: [j] },
  { provide: wt, useClass: Yr, multi: !0, deps: [j] },
  On,
  Mn,
  En,
  { provide: Rr, useExisting: On },
  { provide: Fr, useClass: ro },
  [],
];
var Qr = (() => {
  class t {
    _doc;
    constructor(e) {
      this._doc = e;
    }
    getTitle() {
      return this._doc.title;
    }
    setTitle(e) {
      this._doc.title = e || '';
    }
    static ɵfac = function (r) {
      return new (r || t)(C(j));
    };
    static ɵprov = y({ token: t, factory: t.ɵfac, providedIn: 'root' });
  }
  return t;
})();
var p = 'primary',
  it = Symbol('RouteTitle'),
  Pn = class {
    params;
    constructor(n) {
      this.params = n || {};
    }
    has(n) {
      return Object.prototype.hasOwnProperty.call(this.params, n);
    }
    get(n) {
      if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e[0] : e;
      }
      return null;
    }
    getAll(n) {
      if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e : [e];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function le(t) {
  return new Pn(t);
}
function oi(t, n, e) {
  let r = e.path.split('/');
  if (r.length > t.length || (e.pathMatch === 'full' && (n.hasChildren() || r.length < t.length)))
    return null;
  let i = {};
  for (let o = 0; o < r.length; o++) {
    let s = r[o],
      a = t[o];
    if (s[0] === ':') i[s.substring(1)] = a;
    else if (s !== a.path) return null;
  }
  return { consumed: t.slice(0, r.length), posParams: i };
}
function fo(t, n) {
  if (t.length !== n.length) return !1;
  for (let e = 0; e < t.length; ++e) if (!F(t[e], n[e])) return !1;
  return !0;
}
function F(t, n) {
  let e = t ? xn(t) : void 0,
    r = n ? xn(n) : void 0;
  if (!e || !r || e.length != r.length) return !1;
  let i;
  for (let o = 0; o < e.length; o++) if (((i = e[o]), !si(t[i], n[i]))) return !1;
  return !0;
}
function xn(t) {
  return [...Object.keys(t), ...Object.getOwnPropertySymbols(t)];
}
function si(t, n) {
  if (Array.isArray(t) && Array.isArray(n)) {
    if (t.length !== n.length) return !1;
    let e = [...t].sort(),
      r = [...n].sort();
    return e.every((i, o) => r[o] === i);
  } else return t === n;
}
function ai(t) {
  return t.length > 0 ? t[t.length - 1] : null;
}
function Z(t) {
  return tr(t) ? t : _r(t) ? L(Promise.resolve(t)) : h(t);
}
var go = { exact: li, subset: ui },
  ci = { exact: mo, subset: vo, ignored: () => !0 };
function Jr(t, n, e) {
  return (
    go[e.paths](t.root, n.root, e.matrixParams) &&
    ci[e.queryParams](t.queryParams, n.queryParams) &&
    !(e.fragment === 'exact' && t.fragment !== n.fragment)
  );
}
function mo(t, n) {
  return F(t, n);
}
function li(t, n, e) {
  if (
    !ae(t.segments, n.segments) ||
    !Ot(t.segments, n.segments, e) ||
    t.numberOfChildren !== n.numberOfChildren
  )
    return !1;
  for (let r in n.children) if (!t.children[r] || !li(t.children[r], n.children[r], e)) return !1;
  return !0;
}
function vo(t, n) {
  return (
    Object.keys(n).length <= Object.keys(t).length && Object.keys(n).every((e) => si(t[e], n[e]))
  );
}
function ui(t, n, e) {
  return di(t, n, n.segments, e);
}
function di(t, n, e, r) {
  if (t.segments.length > e.length) {
    let i = t.segments.slice(0, e.length);
    return !(!ae(i, e) || n.hasChildren() || !Ot(i, e, r));
  } else if (t.segments.length === e.length) {
    if (!ae(t.segments, e) || !Ot(t.segments, e, r)) return !1;
    for (let i in n.children) if (!t.children[i] || !ui(t.children[i], n.children[i], r)) return !1;
    return !0;
  } else {
    let i = e.slice(0, t.segments.length),
      o = e.slice(t.segments.length);
    return !ae(t.segments, i) || !Ot(t.segments, i, r) || !t.children[p]
      ? !1
      : di(t.children[p], n, o, r);
  }
}
function Ot(t, n, e) {
  return n.every((r, i) => ci[e](t[i].parameters, r.parameters));
}
var V = class {
    root;
    queryParams;
    fragment;
    _queryParamMap;
    constructor(n = new g([], {}), e = {}, r = null) {
      (this.root = n), (this.queryParams = e), (this.fragment = r);
    }
    get queryParamMap() {
      return (this._queryParamMap ??= le(this.queryParams)), this._queryParamMap;
    }
    toString() {
      return So.serialize(this);
    }
  },
  g = class {
    segments;
    children;
    parent = null;
    constructor(n, e) {
      (this.segments = n), (this.children = e), Object.values(e).forEach((r) => (r.parent = this));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return _t(this);
    }
  },
  te = class {
    path;
    parameters;
    _parameterMap;
    constructor(n, e) {
      (this.path = n), (this.parameters = e);
    }
    get parameterMap() {
      return (this._parameterMap ??= le(this.parameters)), this._parameterMap;
    }
    toString() {
      return pi(this);
    }
  };
function yo(t, n) {
  return ae(t, n) && t.every((e, r) => F(e.parameters, n[r].parameters));
}
function ae(t, n) {
  return t.length !== n.length ? !1 : t.every((e, r) => e.path === n[r].path);
}
function Co(t, n) {
  let e = [];
  return (
    Object.entries(t.children).forEach(([r, i]) => {
      r === p && (e = e.concat(n(i, r)));
    }),
    Object.entries(t.children).forEach(([r, i]) => {
      r !== p && (e = e.concat(n(i, r)));
    }),
    e
  );
}
var ot = (() => {
    class t {
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = y({ token: t, factory: () => new ue(), providedIn: 'root' });
    }
    return t;
  })(),
  ue = class {
    parse(n) {
      let e = new Un(n);
      return new V(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment());
    }
    serialize(n) {
      let e = `/${Ve(n.root, !0)}`,
        r = Eo(n.queryParams),
        i = typeof n.fragment == 'string' ? `#${Ro(n.fragment)}` : '';
      return `${e}${r}${i}`;
    }
  },
  So = new ue();
function _t(t) {
  return t.segments.map((n) => pi(n)).join('/');
}
function Ve(t, n) {
  if (!t.hasChildren()) return _t(t);
  if (n) {
    let e = t.children[p] ? Ve(t.children[p], !1) : '',
      r = [];
    return (
      Object.entries(t.children).forEach(([i, o]) => {
        i !== p && r.push(`${i}:${Ve(o, !1)}`);
      }),
      r.length > 0 ? `${e}(${r.join('//')})` : e
    );
  } else {
    let e = Co(t, (r, i) => (i === p ? [Ve(t.children[p], !1)] : [`${i}:${Ve(r, !1)}`]));
    return Object.keys(t.children).length === 1 && t.children[p] != null
      ? `${_t(t)}/${e[0]}`
      : `${_t(t)}/(${e.join('//')})`;
  }
}
function hi(t) {
  return encodeURIComponent(t)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',');
}
function Mt(t) {
  return hi(t).replace(/%3B/gi, ';');
}
function Ro(t) {
  return encodeURI(t);
}
function Nn(t) {
  return hi(t).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%26/gi, '&');
}
function It(t) {
  return decodeURIComponent(t);
}
function Xr(t) {
  return It(t.replace(/\+/g, '%20'));
}
function pi(t) {
  return `${Nn(t.path)}${wo(t.parameters)}`;
}
function wo(t) {
  return Object.entries(t)
    .map(([n, e]) => `;${Nn(n)}=${Nn(e)}`)
    .join('');
}
function Eo(t) {
  let n = Object.entries(t)
    .map(([e, r]) =>
      Array.isArray(r) ? r.map((i) => `${Mt(e)}=${Mt(i)}`).join('&') : `${Mt(e)}=${Mt(r)}`
    )
    .filter((e) => e);
  return n.length ? `?${n.join('&')}` : '';
}
var Mo = /^[^\/()?;#]+/;
function In(t) {
  let n = t.match(Mo);
  return n ? n[0] : '';
}
var bo = /^[^\/()?;=#]+/;
function Oo(t) {
  let n = t.match(bo);
  return n ? n[0] : '';
}
var _o = /^[^=?&#]+/;
function Io(t) {
  let n = t.match(_o);
  return n ? n[0] : '';
}
var To = /^[^&#]+/;
function Ao(t) {
  let n = t.match(To);
  return n ? n[0] : '';
}
var Un = class {
  url;
  remaining;
  constructor(n) {
    (this.url = n), (this.remaining = n);
  }
  parseRootSegment() {
    return (
      this.consumeOptional('/'),
      this.remaining === '' || this.peekStartsWith('?') || this.peekStartsWith('#')
        ? new g([], {})
        : new g([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let n = {};
    if (this.consumeOptional('?'))
      do this.parseQueryParam(n);
      while (this.consumeOptional('&'));
    return n;
  }
  parseFragment() {
    return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
  }
  parseChildren() {
    if (this.remaining === '') return {};
    this.consumeOptional('/');
    let n = [];
    for (
      this.peekStartsWith('(') || n.push(this.parseSegment());
      this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(');

    )
      this.capture('/'), n.push(this.parseSegment());
    let e = {};
    this.peekStartsWith('/(') && (this.capture('/'), (e = this.parseParens(!0)));
    let r = {};
    return (
      this.peekStartsWith('(') && (r = this.parseParens(!1)),
      (n.length > 0 || Object.keys(e).length > 0) && (r[p] = new g(n, e)),
      r
    );
  }
  parseSegment() {
    let n = In(this.remaining);
    if (n === '' && this.peekStartsWith(';')) throw new S(4009, !1);
    return this.capture(n), new te(It(n), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let n = {};
    for (; this.consumeOptional(';'); ) this.parseParam(n);
    return n;
  }
  parseParam(n) {
    let e = Oo(this.remaining);
    if (!e) return;
    this.capture(e);
    let r = '';
    if (this.consumeOptional('=')) {
      let i = In(this.remaining);
      i && ((r = i), this.capture(r));
    }
    n[It(e)] = It(r);
  }
  parseQueryParam(n) {
    let e = Io(this.remaining);
    if (!e) return;
    this.capture(e);
    let r = '';
    if (this.consumeOptional('=')) {
      let s = Ao(this.remaining);
      s && ((r = s), this.capture(r));
    }
    let i = Xr(e),
      o = Xr(r);
    if (n.hasOwnProperty(i)) {
      let s = n[i];
      Array.isArray(s) || ((s = [s]), (n[i] = s)), s.push(o);
    } else n[i] = o;
  }
  parseParens(n) {
    let e = {};
    for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
      let r = In(this.remaining),
        i = this.remaining[r.length];
      if (i !== '/' && i !== ')' && i !== ';') throw new S(4010, !1);
      let o;
      r.indexOf(':') > -1
        ? ((o = r.slice(0, r.indexOf(':'))), this.capture(o), this.capture(':'))
        : n && (o = p);
      let s = this.parseChildren();
      (e[o ?? p] = Object.keys(s).length === 1 && s[p] ? s[p] : new g([], s)),
        this.consumeOptional('//');
    }
    return e;
  }
  peekStartsWith(n) {
    return this.remaining.startsWith(n);
  }
  consumeOptional(n) {
    return this.peekStartsWith(n)
      ? ((this.remaining = this.remaining.substring(n.length)), !0)
      : !1;
  }
  capture(n) {
    if (!this.consumeOptional(n)) throw new S(4011, !1);
  }
};
function fi(t) {
  return t.segments.length > 0 ? new g([], { [p]: t }) : t;
}
function gi(t) {
  let n = {};
  for (let [r, i] of Object.entries(t.children)) {
    let o = gi(i);
    if (r === p && o.segments.length === 0 && o.hasChildren())
      for (let [s, a] of Object.entries(o.children)) n[s] = a;
    else (o.segments.length > 0 || o.hasChildren()) && (n[r] = o);
  }
  let e = new g(t.segments, n);
  return Do(e);
}
function Do(t) {
  if (t.numberOfChildren === 1 && t.children[p]) {
    let n = t.children[p];
    return new g(t.segments.concat(n.segments), n.children);
  }
  return t;
}
function Se(t) {
  return t instanceof V;
}
function mi(t, n, e = null, r = null) {
  let i = vi(t);
  return yi(i, n, e, r);
}
function vi(t) {
  let n;
  function e(o) {
    let s = {};
    for (let c of o.children) {
      let l = e(c);
      s[c.outlet] = l;
    }
    let a = new g(o.url, s);
    return o === t && (n = a), a;
  }
  let r = e(t.root),
    i = fi(r);
  return n ?? i;
}
function yi(t, n, e, r) {
  let i = t;
  for (; i.parent; ) i = i.parent;
  if (n.length === 0) return Tn(i, i, i, e, r);
  let o = Po(n);
  if (o.toRoot()) return Tn(i, i, new g([], {}), e, r);
  let s = xo(o, i, t),
    a = s.processChildren
      ? Ge(s.segmentGroup, s.index, o.commands)
      : Si(s.segmentGroup, s.index, o.commands);
  return Tn(i, s.segmentGroup, a, e, r);
}
function Tt(t) {
  return typeof t == 'object' && t != null && !t.outlets && !t.segmentPath;
}
function Ke(t) {
  return typeof t == 'object' && t != null && t.outlets;
}
function Tn(t, n, e, r, i) {
  let o = {};
  r &&
    Object.entries(r).forEach(([c, l]) => {
      o[c] = Array.isArray(l) ? l.map((u) => `${u}`) : `${l}`;
    });
  let s;
  t === n ? (s = e) : (s = Ci(t, n, e));
  let a = fi(gi(s));
  return new V(a, o, i);
}
function Ci(t, n, e) {
  let r = {};
  return (
    Object.entries(t.children).forEach(([i, o]) => {
      o === n ? (r[i] = e) : (r[i] = Ci(o, n, e));
    }),
    new g(t.segments, r)
  );
}
var At = class {
  isAbsolute;
  numberOfDoubleDots;
  commands;
  constructor(n, e, r) {
    if (
      ((this.isAbsolute = n),
      (this.numberOfDoubleDots = e),
      (this.commands = r),
      n && r.length > 0 && Tt(r[0]))
    )
      throw new S(4003, !1);
    let i = r.find(Ke);
    if (i && i !== ai(r)) throw new S(4004, !1);
  }
  toRoot() {
    return this.isAbsolute && this.commands.length === 1 && this.commands[0] == '/';
  }
};
function Po(t) {
  if (typeof t[0] == 'string' && t.length === 1 && t[0] === '/') return new At(!0, 0, t);
  let n = 0,
    e = !1,
    r = t.reduce((i, o, s) => {
      if (typeof o == 'object' && o != null) {
        if (o.outlets) {
          let a = {};
          return (
            Object.entries(o.outlets).forEach(([c, l]) => {
              a[c] = typeof l == 'string' ? l.split('/') : l;
            }),
            [...i, { outlets: a }]
          );
        }
        if (o.segmentPath) return [...i, o.segmentPath];
      }
      return typeof o != 'string'
        ? [...i, o]
        : s === 0
        ? (o.split('/').forEach((a, c) => {
            (c == 0 && a === '.') ||
              (c == 0 && a === '' ? (e = !0) : a === '..' ? n++ : a != '' && i.push(a));
          }),
          i)
        : [...i, o];
    }, []);
  return new At(e, n, r);
}
var ye = class {
  segmentGroup;
  processChildren;
  index;
  constructor(n, e, r) {
    (this.segmentGroup = n), (this.processChildren = e), (this.index = r);
  }
};
function xo(t, n, e) {
  if (t.isAbsolute) return new ye(n, !0, 0);
  if (!e) return new ye(n, !1, NaN);
  if (e.parent === null) return new ye(e, !0, 0);
  let r = Tt(t.commands[0]) ? 0 : 1,
    i = e.segments.length - 1 + r;
  return No(e, i, t.numberOfDoubleDots);
}
function No(t, n, e) {
  let r = t,
    i = n,
    o = e;
  for (; o > i; ) {
    if (((o -= i), (r = r.parent), !r)) throw new S(4005, !1);
    i = r.segments.length;
  }
  return new ye(r, !1, i - o);
}
function Uo(t) {
  return Ke(t[0]) ? t[0].outlets : { [p]: t };
}
function Si(t, n, e) {
  if (((t ??= new g([], {})), t.segments.length === 0 && t.hasChildren())) return Ge(t, n, e);
  let r = Lo(t, n, e),
    i = e.slice(r.commandIndex);
  if (r.match && r.pathIndex < t.segments.length) {
    let o = new g(t.segments.slice(0, r.pathIndex), {});
    return (o.children[p] = new g(t.segments.slice(r.pathIndex), t.children)), Ge(o, 0, i);
  } else
    return r.match && i.length === 0
      ? new g(t.segments, {})
      : r.match && !t.hasChildren()
      ? Ln(t, n, e)
      : r.match
      ? Ge(t, 0, i)
      : Ln(t, n, e);
}
function Ge(t, n, e) {
  if (e.length === 0) return new g(t.segments, {});
  {
    let r = Uo(e),
      i = {};
    if (
      Object.keys(r).some((o) => o !== p) &&
      t.children[p] &&
      t.numberOfChildren === 1 &&
      t.children[p].segments.length === 0
    ) {
      let o = Ge(t.children[p], n, e);
      return new g(t.segments, o.children);
    }
    return (
      Object.entries(r).forEach(([o, s]) => {
        typeof s == 'string' && (s = [s]), s !== null && (i[o] = Si(t.children[o], n, s));
      }),
      Object.entries(t.children).forEach(([o, s]) => {
        r[o] === void 0 && (i[o] = s);
      }),
      new g(t.segments, i)
    );
  }
}
function Lo(t, n, e) {
  let r = 0,
    i = n,
    o = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; i < t.segments.length; ) {
    if (r >= e.length) return o;
    let s = t.segments[i],
      a = e[r];
    if (Ke(a)) break;
    let c = `${a}`,
      l = r < e.length - 1 ? e[r + 1] : null;
    if (i > 0 && c === void 0) break;
    if (c && l && typeof l == 'object' && l.outlets === void 0) {
      if (!ti(c, l, s)) return o;
      r += 2;
    } else {
      if (!ti(c, {}, s)) return o;
      r++;
    }
    i++;
  }
  return { match: !0, pathIndex: i, commandIndex: r };
}
function Ln(t, n, e) {
  let r = t.segments.slice(0, n),
    i = 0;
  for (; i < e.length; ) {
    let o = e[i];
    if (Ke(o)) {
      let c = ko(o.outlets);
      return new g(r, c);
    }
    if (i === 0 && Tt(e[0])) {
      let c = t.segments[n];
      r.push(new te(c.path, ei(e[0]))), i++;
      continue;
    }
    let s = Ke(o) ? o.outlets[p] : `${o}`,
      a = i < e.length - 1 ? e[i + 1] : null;
    s && a && Tt(a) ? (r.push(new te(s, ei(a))), (i += 2)) : (r.push(new te(s, {})), i++);
  }
  return new g(r, {});
}
function ko(t) {
  let n = {};
  return (
    Object.entries(t).forEach(([e, r]) => {
      typeof r == 'string' && (r = [r]), r !== null && (n[e] = Ln(new g([], {}), 0, r));
    }),
    n
  );
}
function ei(t) {
  let n = {};
  return Object.entries(t).forEach(([e, r]) => (n[e] = `${r}`)), n;
}
function ti(t, n, e) {
  return t == e.path && F(n, e.parameters);
}
var We = 'imperative',
  b = (function (t) {
    return (
      (t[(t.NavigationStart = 0)] = 'NavigationStart'),
      (t[(t.NavigationEnd = 1)] = 'NavigationEnd'),
      (t[(t.NavigationCancel = 2)] = 'NavigationCancel'),
      (t[(t.NavigationError = 3)] = 'NavigationError'),
      (t[(t.RoutesRecognized = 4)] = 'RoutesRecognized'),
      (t[(t.ResolveStart = 5)] = 'ResolveStart'),
      (t[(t.ResolveEnd = 6)] = 'ResolveEnd'),
      (t[(t.GuardsCheckStart = 7)] = 'GuardsCheckStart'),
      (t[(t.GuardsCheckEnd = 8)] = 'GuardsCheckEnd'),
      (t[(t.RouteConfigLoadStart = 9)] = 'RouteConfigLoadStart'),
      (t[(t.RouteConfigLoadEnd = 10)] = 'RouteConfigLoadEnd'),
      (t[(t.ChildActivationStart = 11)] = 'ChildActivationStart'),
      (t[(t.ChildActivationEnd = 12)] = 'ChildActivationEnd'),
      (t[(t.ActivationStart = 13)] = 'ActivationStart'),
      (t[(t.ActivationEnd = 14)] = 'ActivationEnd'),
      (t[(t.Scroll = 15)] = 'Scroll'),
      (t[(t.NavigationSkipped = 16)] = 'NavigationSkipped'),
      t
    );
  })(b || {}),
  x = class {
    id;
    url;
    constructor(n, e) {
      (this.id = n), (this.url = e);
    }
  },
  de = class extends x {
    type = b.NavigationStart;
    navigationTrigger;
    restoredState;
    constructor(n, e, r = 'imperative', i = null) {
      super(n, e), (this.navigationTrigger = r), (this.restoredState = i);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  G = class extends x {
    urlAfterRedirects;
    type = b.NavigationEnd;
    constructor(n, e, r) {
      super(n, e), (this.urlAfterRedirects = r);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  T = (function (t) {
    return (
      (t[(t.Redirect = 0)] = 'Redirect'),
      (t[(t.SupersededByNewNavigation = 1)] = 'SupersededByNewNavigation'),
      (t[(t.NoDataFromResolver = 2)] = 'NoDataFromResolver'),
      (t[(t.GuardRejected = 3)] = 'GuardRejected'),
      (t[(t.Aborted = 4)] = 'Aborted'),
      t
    );
  })(T || {}),
  Ye = (function (t) {
    return (
      (t[(t.IgnoredSameUrlNavigation = 0)] = 'IgnoredSameUrlNavigation'),
      (t[(t.IgnoredByUrlHandlingStrategy = 1)] = 'IgnoredByUrlHandlingStrategy'),
      t
    );
  })(Ye || {}),
  B = class extends x {
    reason;
    code;
    type = b.NavigationCancel;
    constructor(n, e, r, i) {
      super(n, e), (this.reason = r), (this.code = i);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  W = class extends x {
    reason;
    code;
    type = b.NavigationSkipped;
    constructor(n, e, r, i) {
      super(n, e), (this.reason = r), (this.code = i);
    }
  },
  Re = class extends x {
    error;
    target;
    type = b.NavigationError;
    constructor(n, e, r, i) {
      super(n, e), (this.error = r), (this.target = i);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  Qe = class extends x {
    urlAfterRedirects;
    state;
    type = b.RoutesRecognized;
    constructor(n, e, r, i) {
      super(n, e), (this.urlAfterRedirects = r), (this.state = i);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Dt = class extends x {
    urlAfterRedirects;
    state;
    type = b.GuardsCheckStart;
    constructor(n, e, r, i) {
      super(n, e), (this.urlAfterRedirects = r), (this.state = i);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Pt = class extends x {
    urlAfterRedirects;
    state;
    shouldActivate;
    type = b.GuardsCheckEnd;
    constructor(n, e, r, i, o) {
      super(n, e), (this.urlAfterRedirects = r), (this.state = i), (this.shouldActivate = o);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  xt = class extends x {
    urlAfterRedirects;
    state;
    type = b.ResolveStart;
    constructor(n, e, r, i) {
      super(n, e), (this.urlAfterRedirects = r), (this.state = i);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Nt = class extends x {
    urlAfterRedirects;
    state;
    type = b.ResolveEnd;
    constructor(n, e, r, i) {
      super(n, e), (this.urlAfterRedirects = r), (this.state = i);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Ut = class {
    route;
    type = b.RouteConfigLoadStart;
    constructor(n) {
      this.route = n;
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  Lt = class {
    route;
    type = b.RouteConfigLoadEnd;
    constructor(n) {
      this.route = n;
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  kt = class {
    snapshot;
    type = b.ChildActivationStart;
    constructor(n) {
      this.snapshot = n;
    }
    toString() {
      return `ChildActivationStart(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
      }')`;
    }
  },
  jt = class {
    snapshot;
    type = b.ChildActivationEnd;
    constructor(n) {
      this.snapshot = n;
    }
    toString() {
      return `ChildActivationEnd(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
      }')`;
    }
  },
  $t = class {
    snapshot;
    type = b.ActivationStart;
    constructor(n) {
      this.snapshot = n;
    }
    toString() {
      return `ActivationStart(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
      }')`;
    }
  },
  Ht = class {
    snapshot;
    type = b.ActivationEnd;
    constructor(n) {
      this.snapshot = n;
    }
    toString() {
      return `ActivationEnd(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
      }')`;
    }
  };
var Je = class {},
  we = class {
    url;
    navigationBehaviorOptions;
    constructor(n, e) {
      (this.url = n), (this.navigationBehaviorOptions = e);
    }
  };
function jo(t) {
  return !(t instanceof Je) && !(t instanceof we);
}
function $o(t, n) {
  return (
    t.providers && !t._injector && (t._injector = yn(t.providers, n, `Route: ${t.path}`)),
    t._injector ?? n
  );
}
function z(t) {
  return t.outlet || p;
}
function Ho(t, n) {
  let e = t.filter((r) => z(r) === n);
  return e.push(...t.filter((r) => z(r) !== n)), e;
}
function be(t) {
  if (!t) return null;
  if (t.routeConfig?._injector) return t.routeConfig._injector;
  for (let n = t.parent; n; n = n.parent) {
    let e = n.routeConfig;
    if (e?._loadedInjector) return e._loadedInjector;
    if (e?._injector) return e._injector;
  }
  return null;
}
var zt = class {
    rootInjector;
    outlet = null;
    route = null;
    children;
    attachRef = null;
    get injector() {
      return be(this.route?.snapshot) ?? this.rootInjector;
    }
    constructor(n) {
      (this.rootInjector = n), (this.children = new Oe(this.rootInjector));
    }
  },
  Oe = (() => {
    class t {
      rootInjector;
      contexts = new Map();
      constructor(e) {
        this.rootInjector = e;
      }
      onChildOutletCreated(e, r) {
        let i = this.getOrCreateContext(e);
        (i.outlet = r), this.contexts.set(e, i);
      }
      onChildOutletDestroyed(e) {
        let r = this.getContext(e);
        r && ((r.outlet = null), (r.attachRef = null));
      }
      onOutletDeactivated() {
        let e = this.contexts;
        return (this.contexts = new Map()), e;
      }
      onOutletReAttached(e) {
        this.contexts = e;
      }
      getOrCreateContext(e) {
        let r = this.getContext(e);
        return r || ((r = new zt(this.rootInjector)), this.contexts.set(e, r)), r;
      }
      getContext(e) {
        return this.contexts.get(e) || null;
      }
      static ɵfac = function (r) {
        return new (r || t)(C(Ue));
      };
      static ɵprov = y({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })(),
  Ft = class {
    _root;
    constructor(n) {
      this._root = n;
    }
    get root() {
      return this._root.value;
    }
    parent(n) {
      let e = this.pathFromRoot(n);
      return e.length > 1 ? e[e.length - 2] : null;
    }
    children(n) {
      let e = kn(n, this._root);
      return e ? e.children.map((r) => r.value) : [];
    }
    firstChild(n) {
      let e = kn(n, this._root);
      return e && e.children.length > 0 ? e.children[0].value : null;
    }
    siblings(n) {
      let e = jn(n, this._root);
      return e.length < 2
        ? []
        : e[e.length - 2].children.map((i) => i.value).filter((i) => i !== n);
    }
    pathFromRoot(n) {
      return jn(n, this._root).map((e) => e.value);
    }
  };
function kn(t, n) {
  if (t === n.value) return n;
  for (let e of n.children) {
    let r = kn(t, e);
    if (r) return r;
  }
  return null;
}
function jn(t, n) {
  if (t === n.value) return [n];
  for (let e of n.children) {
    let r = jn(t, e);
    if (r.length) return r.unshift(n), r;
  }
  return [];
}
var P = class {
  value;
  children;
  constructor(n, e) {
    (this.value = n), (this.children = e);
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function ve(t) {
  let n = {};
  return t && t.children.forEach((e) => (n[e.value.outlet] = e)), n;
}
var Xe = class extends Ft {
  snapshot;
  constructor(n, e) {
    super(n), (this.snapshot = e), Gn(this, n);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function Ri(t) {
  let n = zo(t),
    e = new U([new te('', {})]),
    r = new U({}),
    i = new U({}),
    o = new U({}),
    s = new U(''),
    a = new ne(e, r, o, s, i, p, t, n.root);
  return (a.snapshot = n.root), new Xe(new P(a, []), n);
}
function zo(t) {
  let n = {},
    e = {},
    r = {},
    o = new ce([], n, r, '', e, p, t, null, {});
  return new et('', new P(o, []));
}
var ne = class {
  urlSubject;
  paramsSubject;
  queryParamsSubject;
  fragmentSubject;
  dataSubject;
  outlet;
  component;
  snapshot;
  _futureSnapshot;
  _routerState;
  _paramMap;
  _queryParamMap;
  title;
  url;
  params;
  queryParams;
  fragment;
  data;
  constructor(n, e, r, i, o, s, a, c) {
    (this.urlSubject = n),
      (this.paramsSubject = e),
      (this.queryParamsSubject = r),
      (this.fragmentSubject = i),
      (this.dataSubject = o),
      (this.outlet = s),
      (this.component = a),
      (this._futureSnapshot = c),
      (this.title = this.dataSubject?.pipe(m((l) => l[it])) ?? h(void 0)),
      (this.url = n),
      (this.params = e),
      (this.queryParams = r),
      (this.fragment = i),
      (this.data = o);
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    return (this._paramMap ??= this.params.pipe(m((n) => le(n)))), this._paramMap;
  }
  get queryParamMap() {
    return (this._queryParamMap ??= this.queryParams.pipe(m((n) => le(n)))), this._queryParamMap;
  }
  toString() {
    return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
  }
};
function Bt(t, n, e = 'emptyOnly') {
  let r,
    { routeConfig: i } = t;
  return (
    n !== null &&
    (e === 'always' || i?.path === '' || (!n.component && !n.routeConfig?.loadComponent))
      ? (r = {
          params: d(d({}, n.params), t.params),
          data: d(d({}, n.data), t.data),
          resolve: d(d(d(d({}, t.data), n.data), i?.data), t._resolvedData),
        })
      : (r = {
          params: d({}, t.params),
          data: d({}, t.data),
          resolve: d(d({}, t.data), t._resolvedData ?? {}),
        }),
    i && Ei(i) && (r.resolve[it] = i.title),
    r
  );
}
var ce = class {
    url;
    params;
    queryParams;
    fragment;
    data;
    outlet;
    component;
    routeConfig;
    _resolve;
    _resolvedData;
    _routerState;
    _paramMap;
    _queryParamMap;
    get title() {
      return this.data?.[it];
    }
    constructor(n, e, r, i, o, s, a, c, l) {
      (this.url = n),
        (this.params = e),
        (this.queryParams = r),
        (this.fragment = i),
        (this.data = o),
        (this.outlet = s),
        (this.component = a),
        (this.routeConfig = c),
        (this._resolve = l);
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return (this._paramMap ??= le(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (this._queryParamMap ??= le(this.queryParams)), this._queryParamMap;
    }
    toString() {
      let n = this.url.map((r) => r.toString()).join('/'),
        e = this.routeConfig ? this.routeConfig.path : '';
      return `Route(url:'${n}', path:'${e}')`;
    }
  },
  et = class extends Ft {
    url;
    constructor(n, e) {
      super(e), (this.url = n), Gn(this, e);
    }
    toString() {
      return wi(this._root);
    }
  };
function Gn(t, n) {
  (n.value._routerState = t), n.children.forEach((e) => Gn(t, e));
}
function wi(t) {
  let n = t.children.length > 0 ? ` { ${t.children.map(wi).join(', ')} } ` : '';
  return `${t.value}${n}`;
}
function An(t) {
  if (t.snapshot) {
    let n = t.snapshot,
      e = t._futureSnapshot;
    (t.snapshot = e),
      F(n.queryParams, e.queryParams) || t.queryParamsSubject.next(e.queryParams),
      n.fragment !== e.fragment && t.fragmentSubject.next(e.fragment),
      F(n.params, e.params) || t.paramsSubject.next(e.params),
      fo(n.url, e.url) || t.urlSubject.next(e.url),
      F(n.data, e.data) || t.dataSubject.next(e.data);
  } else (t.snapshot = t._futureSnapshot), t.dataSubject.next(t._futureSnapshot.data);
}
function $n(t, n) {
  let e = F(t.params, n.params) && yo(t.url, n.url),
    r = !t.parent != !n.parent;
  return e && !r && (!t.parent || $n(t.parent, n.parent));
}
function Ei(t) {
  return typeof t.title == 'string' || t.title === null;
}
var Mi = new _(''),
  st = (() => {
    class t {
      activated = null;
      get activatedComponentRef() {
        return this.activated;
      }
      _activatedRoute = null;
      name = p;
      activateEvents = new ge();
      deactivateEvents = new ge();
      attachEvents = new ge();
      detachEvents = new ge();
      routerOutletData = Lr();
      parentContexts = f(Oe);
      location = f(wr);
      changeDetector = f(kr);
      inputBinder = f(Wt, { optional: !0 });
      supportsBindingToComponentInputs = !0;
      ngOnChanges(e) {
        if (e.name) {
          let { firstChange: r, previousValue: i } = e.name;
          if (r) return;
          this.isTrackedInParentContexts(i) &&
            (this.deactivate(), this.parentContexts.onChildOutletDestroyed(i)),
            this.initializeOutletWithName();
        }
      }
      ngOnDestroy() {
        this.isTrackedInParentContexts(this.name) &&
          this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(e) {
        return this.parentContexts.getContext(e)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if ((this.parentContexts.onChildOutletCreated(this.name, this), this.activated)) return;
        let e = this.parentContexts.getContext(this.name);
        e?.route &&
          (e.attachRef
            ? this.attach(e.attachRef, e.route)
            : this.activateWith(e.route, e.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new S(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new S(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new S(4012, !1);
        this.location.detach();
        let e = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(e.instance),
          e
        );
      }
      attach(e, r) {
        (this.activated = e),
          (this._activatedRoute = r),
          this.location.insert(e.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(e.instance);
      }
      deactivate() {
        if (this.activated) {
          let e = this.component;
          this.activated.destroy(),
            (this.activated = null),
            (this._activatedRoute = null),
            this.deactivateEvents.emit(e);
        }
      }
      activateWith(e, r) {
        if (this.isActivated) throw new S(4013, !1);
        this._activatedRoute = e;
        let i = this.location,
          s = e.snapshot.component,
          a = this.parentContexts.getOrCreateContext(this.name).children,
          c = new Hn(e, a, i.injector, this.routerOutletData);
        (this.activated = i.createComponent(s, {
          index: i.length,
          injector: c,
          environmentInjector: r,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵdir = Mr({
        type: t,
        selectors: [['router-outlet']],
        inputs: { name: 'name', routerOutletData: [1, 'routerOutletData'] },
        outputs: {
          activateEvents: 'activate',
          deactivateEvents: 'deactivate',
          attachEvents: 'attach',
          detachEvents: 'detach',
        },
        exportAs: ['outlet'],
        features: [fr],
      });
    }
    return t;
  })(),
  Hn = class {
    route;
    childContexts;
    parent;
    outletData;
    constructor(n, e, r, i) {
      (this.route = n), (this.childContexts = e), (this.parent = r), (this.outletData = i);
    }
    get(n, e) {
      return n === ne
        ? this.route
        : n === Oe
        ? this.childContexts
        : n === Mi
        ? this.outletData
        : this.parent.get(n, e);
    }
  },
  Wt = new _('');
var Wn = (() => {
  class t {
    static ɵfac = function (r) {
      return new (r || t)();
    };
    static ɵcmp = $({
      type: t,
      selectors: [['ng-component']],
      exportAs: ['emptyRouterOutlet'],
      decls: 1,
      vars: 0,
      template: function (r, i) {
        r & 1 && J(0, 'router-outlet');
      },
      dependencies: [st],
      encapsulation: 2,
    });
  }
  return t;
})();
function Zn(t) {
  let n = t.children && t.children.map(Zn),
    e = n ? N(d({}, t), { children: n }) : d({}, t);
  return (
    !e.component &&
      !e.loadComponent &&
      (n || e.loadChildren) &&
      e.outlet &&
      e.outlet !== p &&
      (e.component = Wn),
    e
  );
}
function Fo(t, n, e) {
  let r = tt(t, n._root, e ? e._root : void 0);
  return new Xe(r, n);
}
function tt(t, n, e) {
  if (e && t.shouldReuseRoute(n.value, e.value.snapshot)) {
    let r = e.value;
    r._futureSnapshot = n.value;
    let i = Bo(t, n, e);
    return new P(r, i);
  } else {
    if (t.shouldAttach(n.value)) {
      let o = t.retrieve(n.value);
      if (o !== null) {
        let s = o.route;
        return (
          (s.value._futureSnapshot = n.value), (s.children = n.children.map((a) => tt(t, a))), s
        );
      }
    }
    let r = Vo(n.value),
      i = n.children.map((o) => tt(t, o));
    return new P(r, i);
  }
}
function Bo(t, n, e) {
  return n.children.map((r) => {
    for (let i of e.children) if (t.shouldReuseRoute(r.value, i.value.snapshot)) return tt(t, r, i);
    return tt(t, r);
  });
}
function Vo(t) {
  return new ne(
    new U(t.url),
    new U(t.params),
    new U(t.queryParams),
    new U(t.fragment),
    new U(t.data),
    t.outlet,
    t.component,
    t
  );
}
var Ee = class {
    redirectTo;
    navigationBehaviorOptions;
    constructor(n, e) {
      (this.redirectTo = n), (this.navigationBehaviorOptions = e);
    }
  },
  bi = 'ngNavigationCancelingError';
function Vt(t, n) {
  let { redirectTo: e, navigationBehaviorOptions: r } = Se(n)
      ? { redirectTo: n, navigationBehaviorOptions: void 0 }
      : n,
    i = Oi(!1, T.Redirect);
  return (i.url = e), (i.navigationBehaviorOptions = r), i;
}
function Oi(t, n) {
  let e = new Error(`NavigationCancelingError: ${t || ''}`);
  return (e[bi] = !0), (e.cancellationCode = n), e;
}
function qo(t) {
  return _i(t) && Se(t.url);
}
function _i(t) {
  return !!t && t[bi];
}
var Go = (t, n, e, r) =>
    m((i) => (new zn(n, i.targetRouterState, i.currentRouterState, e, r).activate(t), i)),
  zn = class {
    routeReuseStrategy;
    futureState;
    currState;
    forwardEvent;
    inputBindingEnabled;
    constructor(n, e, r, i, o) {
      (this.routeReuseStrategy = n),
        (this.futureState = e),
        (this.currState = r),
        (this.forwardEvent = i),
        (this.inputBindingEnabled = o);
    }
    activate(n) {
      let e = this.futureState._root,
        r = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(e, r, n),
        An(this.futureState.root),
        this.activateChildRoutes(e, r, n);
    }
    deactivateChildRoutes(n, e, r) {
      let i = ve(e);
      n.children.forEach((o) => {
        let s = o.value.outlet;
        this.deactivateRoutes(o, i[s], r), delete i[s];
      }),
        Object.values(i).forEach((o) => {
          this.deactivateRouteAndItsChildren(o, r);
        });
    }
    deactivateRoutes(n, e, r) {
      let i = n.value,
        o = e ? e.value : null;
      if (i === o)
        if (i.component) {
          let s = r.getContext(i.outlet);
          s && this.deactivateChildRoutes(n, e, s.children);
        } else this.deactivateChildRoutes(n, e, r);
      else o && this.deactivateRouteAndItsChildren(e, r);
    }
    deactivateRouteAndItsChildren(n, e) {
      n.value.component && this.routeReuseStrategy.shouldDetach(n.value.snapshot)
        ? this.detachAndStoreRouteSubtree(n, e)
        : this.deactivateRouteAndOutlet(n, e);
    }
    detachAndStoreRouteSubtree(n, e) {
      let r = e.getContext(n.value.outlet),
        i = r && n.value.component ? r.children : e,
        o = ve(n);
      for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, i);
      if (r && r.outlet) {
        let s = r.outlet.detach(),
          a = r.children.onOutletDeactivated();
        this.routeReuseStrategy.store(n.value.snapshot, { componentRef: s, route: n, contexts: a });
      }
    }
    deactivateRouteAndOutlet(n, e) {
      let r = e.getContext(n.value.outlet),
        i = r && n.value.component ? r.children : e,
        o = ve(n);
      for (let s of Object.values(o)) this.deactivateRouteAndItsChildren(s, i);
      r &&
        (r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated()),
        (r.attachRef = null),
        (r.route = null));
    }
    activateChildRoutes(n, e, r) {
      let i = ve(e);
      n.children.forEach((o) => {
        this.activateRoutes(o, i[o.value.outlet], r), this.forwardEvent(new Ht(o.value.snapshot));
      }),
        n.children.length && this.forwardEvent(new jt(n.value.snapshot));
    }
    activateRoutes(n, e, r) {
      let i = n.value,
        o = e ? e.value : null;
      if ((An(i), i === o))
        if (i.component) {
          let s = r.getOrCreateContext(i.outlet);
          this.activateChildRoutes(n, e, s.children);
        } else this.activateChildRoutes(n, e, r);
      else if (i.component) {
        let s = r.getOrCreateContext(i.outlet);
        if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
          let a = this.routeReuseStrategy.retrieve(i.snapshot);
          this.routeReuseStrategy.store(i.snapshot, null),
            s.children.onOutletReAttached(a.contexts),
            (s.attachRef = a.componentRef),
            (s.route = a.route.value),
            s.outlet && s.outlet.attach(a.componentRef, a.route.value),
            An(a.route.value),
            this.activateChildRoutes(n, null, s.children);
        } else
          (s.attachRef = null),
            (s.route = i),
            s.outlet && s.outlet.activateWith(i, s.injector),
            this.activateChildRoutes(n, null, s.children);
      } else this.activateChildRoutes(n, null, r);
    }
  },
  qt = class {
    path;
    route;
    constructor(n) {
      (this.path = n), (this.route = this.path[this.path.length - 1]);
    }
  },
  Ce = class {
    component;
    route;
    constructor(n, e) {
      (this.component = n), (this.route = e);
    }
  };
function Wo(t, n, e) {
  let r = t._root,
    i = n ? n._root : null;
  return qe(r, i, e, [r.value]);
}
function Zo(t) {
  let n = t.routeConfig ? t.routeConfig.canActivateChild : null;
  return !n || n.length === 0 ? null : { node: t, guards: n };
}
function _e(t, n) {
  let e = Symbol(),
    r = n.get(t, e);
  return r === e ? (typeof t == 'function' && !cr(t) ? t : n.get(t)) : r;
}
function qe(t, n, e, r, i = { canDeactivateChecks: [], canActivateChecks: [] }) {
  let o = ve(n);
  return (
    t.children.forEach((s) => {
      Ko(s, o[s.value.outlet], e, r.concat([s.value]), i), delete o[s.value.outlet];
    }),
    Object.entries(o).forEach(([s, a]) => Ze(a, e.getContext(s), i)),
    i
  );
}
function Ko(t, n, e, r, i = { canDeactivateChecks: [], canActivateChecks: [] }) {
  let o = t.value,
    s = n ? n.value : null,
    a = e ? e.getContext(t.value.outlet) : null;
  if (s && o.routeConfig === s.routeConfig) {
    let c = Yo(s, o, o.routeConfig.runGuardsAndResolvers);
    c
      ? i.canActivateChecks.push(new qt(r))
      : ((o.data = s.data), (o._resolvedData = s._resolvedData)),
      o.component ? qe(t, n, a ? a.children : null, r, i) : qe(t, n, e, r, i),
      c &&
        a &&
        a.outlet &&
        a.outlet.isActivated &&
        i.canDeactivateChecks.push(new Ce(a.outlet.component, s));
  } else
    s && Ze(n, a, i),
      i.canActivateChecks.push(new qt(r)),
      o.component ? qe(t, null, a ? a.children : null, r, i) : qe(t, null, e, r, i);
  return i;
}
function Yo(t, n, e) {
  if (typeof e == 'function') return e(t, n);
  switch (e) {
    case 'pathParamsChange':
      return !ae(t.url, n.url);
    case 'pathParamsOrQueryParamsChange':
      return !ae(t.url, n.url) || !F(t.queryParams, n.queryParams);
    case 'always':
      return !0;
    case 'paramsOrQueryParamsChange':
      return !$n(t, n) || !F(t.queryParams, n.queryParams);
    case 'paramsChange':
    default:
      return !$n(t, n);
  }
}
function Ze(t, n, e) {
  let r = ve(t),
    i = t.value;
  Object.entries(r).forEach(([o, s]) => {
    i.component ? (n ? Ze(s, n.children.getContext(o), e) : Ze(s, null, e)) : Ze(s, n, e);
  }),
    i.component
      ? n && n.outlet && n.outlet.isActivated
        ? e.canDeactivateChecks.push(new Ce(n.outlet.component, i))
        : e.canDeactivateChecks.push(new Ce(null, i))
      : e.canDeactivateChecks.push(new Ce(null, i));
}
function at(t) {
  return typeof t == 'function';
}
function Qo(t) {
  return typeof t == 'boolean';
}
function Jo(t) {
  return t && at(t.canLoad);
}
function Xo(t) {
  return t && at(t.canActivate);
}
function es(t) {
  return t && at(t.canActivateChild);
}
function ts(t) {
  return t && at(t.canDeactivate);
}
function ns(t) {
  return t && at(t.canMatch);
}
function Ii(t) {
  return t instanceof nr || t?.name === 'EmptyError';
}
var bt = Symbol('INITIAL_VALUE');
function Me() {
  return D((t) =>
    an(t.map((n) => n.pipe(fe(1), sr(bt)))).pipe(
      m((n) => {
        for (let e of n)
          if (e !== !0) {
            if (e === bt) return bt;
            if (e === !1 || rs(e)) return e;
          }
        return !0;
      }),
      ie((n) => n !== bt),
      fe(1)
    )
  );
}
function rs(t) {
  return Se(t) || t instanceof Ee;
}
function is(t, n) {
  return k((e) => {
    let {
      targetSnapshot: r,
      currentSnapshot: i,
      guards: { canActivateChecks: o, canDeactivateChecks: s },
    } = e;
    return s.length === 0 && o.length === 0
      ? h(N(d({}, e), { guardsResult: !0 }))
      : os(s, r, i, t).pipe(
          k((a) => (a && Qo(a) ? ss(r, o, t, n) : h(a))),
          m((a) => N(d({}, e), { guardsResult: a }))
        );
  });
}
function os(t, n, e, r) {
  return L(t).pipe(
    k((i) => ds(i.component, i.route, e, n, r)),
    Y((i) => i !== !0, !0)
  );
}
function ss(t, n, e, r) {
  return L(n).pipe(
    Ne((i) => rr(cs(i.route.parent, r), as(i.route, r), us(t, i.path, e), ls(t, i.route, e))),
    Y((i) => i !== !0, !0)
  );
}
function as(t, n) {
  return t !== null && n && n(new $t(t)), h(!0);
}
function cs(t, n) {
  return t !== null && n && n(new kt(t)), h(!0);
}
function ls(t, n, e) {
  let r = n.routeConfig ? n.routeConfig.canActivate : null;
  if (!r || r.length === 0) return h(!0);
  let i = r.map((o) =>
    dt(() => {
      let s = be(n) ?? e,
        a = _e(o, s),
        c = Xo(a) ? a.canActivate(n, t) : H(s, () => a(n, t));
      return Z(c).pipe(Y());
    })
  );
  return h(i).pipe(Me());
}
function us(t, n, e) {
  let r = n[n.length - 1],
    o = n
      .slice(0, n.length - 1)
      .reverse()
      .map((s) => Zo(s))
      .filter((s) => s !== null)
      .map((s) =>
        dt(() => {
          let a = s.guards.map((c) => {
            let l = be(s.node) ?? e,
              u = _e(c, l),
              v = es(u) ? u.canActivateChild(r, t) : H(l, () => u(r, t));
            return Z(v).pipe(Y());
          });
          return h(a).pipe(Me());
        })
      );
  return h(o).pipe(Me());
}
function ds(t, n, e, r, i) {
  let o = n && n.routeConfig ? n.routeConfig.canDeactivate : null;
  if (!o || o.length === 0) return h(!0);
  let s = o.map((a) => {
    let c = be(n) ?? i,
      l = _e(a, c),
      u = ts(l) ? l.canDeactivate(t, n, e, r) : H(c, () => l(t, n, e, r));
    return Z(u).pipe(Y());
  });
  return h(s).pipe(Me());
}
function hs(t, n, e, r) {
  let i = n.canLoad;
  if (i === void 0 || i.length === 0) return h(!0);
  let o = i.map((s) => {
    let a = _e(s, t),
      c = Jo(a) ? a.canLoad(n, e) : H(t, () => a(n, e));
    return Z(c);
  });
  return h(o).pipe(Me(), Ti(r));
}
function Ti(t) {
  return Xn(
    O((n) => {
      if (typeof n != 'boolean') throw Vt(t, n);
    }),
    m((n) => n === !0)
  );
}
function ps(t, n, e, r) {
  let i = n.canMatch;
  if (!i || i.length === 0) return h(!0);
  let o = i.map((s) => {
    let a = _e(s, t),
      c = ns(a) ? a.canMatch(n, e) : H(t, () => a(n, e));
    return Z(c);
  });
  return h(o).pipe(Me(), Ti(r));
}
var nt = class {
    segmentGroup;
    constructor(n) {
      this.segmentGroup = n || null;
    }
  },
  rt = class extends Error {
    urlTree;
    constructor(n) {
      super(), (this.urlTree = n);
    }
  };
function me(t) {
  return xe(new nt(t));
}
function fs(t) {
  return xe(new S(4e3, !1));
}
function gs(t) {
  return xe(Oi(!1, T.GuardRejected));
}
var Fn = class {
  urlSerializer;
  urlTree;
  constructor(n, e) {
    (this.urlSerializer = n), (this.urlTree = e);
  }
  lineralizeSegments(n, e) {
    let r = [],
      i = e.root;
    for (;;) {
      if (((r = r.concat(i.segments)), i.numberOfChildren === 0)) return h(r);
      if (i.numberOfChildren > 1 || !i.children[p]) return fs(`${n.redirectTo}`);
      i = i.children[p];
    }
  }
  applyRedirectCommands(n, e, r, i, o) {
    return ms(e, i, o).pipe(
      m((s) => {
        if (s instanceof V) throw new rt(s);
        let a = this.applyRedirectCreateUrlTree(s, this.urlSerializer.parse(s), n, r);
        if (s[0] === '/') throw new rt(a);
        return a;
      })
    );
  }
  applyRedirectCreateUrlTree(n, e, r, i) {
    let o = this.createSegmentGroup(n, e.root, r, i);
    return new V(o, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment);
  }
  createQueryParams(n, e) {
    let r = {};
    return (
      Object.entries(n).forEach(([i, o]) => {
        if (typeof o == 'string' && o[0] === ':') {
          let a = o.substring(1);
          r[i] = e[a];
        } else r[i] = o;
      }),
      r
    );
  }
  createSegmentGroup(n, e, r, i) {
    let o = this.createSegments(n, e.segments, r, i),
      s = {};
    return (
      Object.entries(e.children).forEach(([a, c]) => {
        s[a] = this.createSegmentGroup(n, c, r, i);
      }),
      new g(o, s)
    );
  }
  createSegments(n, e, r, i) {
    return e.map((o) => (o.path[0] === ':' ? this.findPosParam(n, o, i) : this.findOrReturn(o, r)));
  }
  findPosParam(n, e, r) {
    let i = r[e.path.substring(1)];
    if (!i) throw new S(4001, !1);
    return i;
  }
  findOrReturn(n, e) {
    let r = 0;
    for (let i of e) {
      if (i.path === n.path) return e.splice(r), i;
      r++;
    }
    return n;
  }
};
function ms(t, n, e) {
  if (typeof t == 'string') return h(t);
  let r = t,
    {
      queryParams: i,
      fragment: o,
      routeConfig: s,
      url: a,
      outlet: c,
      params: l,
      data: u,
      title: v,
    } = n;
  return Z(
    H(e, () =>
      r({
        params: l,
        data: u,
        queryParams: i,
        fragment: o,
        routeConfig: s,
        url: a,
        outlet: c,
        title: v,
      })
    )
  );
}
var Bn = {
  matched: !1,
  consumedSegments: [],
  remainingSegments: [],
  parameters: {},
  positionalParamSegments: {},
};
function vs(t, n, e, r, i) {
  let o = Ai(t, n, e);
  return o.matched
    ? ((r = $o(n, r)), ps(r, n, e, i).pipe(m((s) => (s === !0 ? o : d({}, Bn)))))
    : h(o);
}
function Ai(t, n, e) {
  if (n.path === '**') return ys(e);
  if (n.path === '')
    return n.pathMatch === 'full' && (t.hasChildren() || e.length > 0)
      ? d({}, Bn)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: e,
          parameters: {},
          positionalParamSegments: {},
        };
  let i = (n.matcher || oi)(e, t, n);
  if (!i) return d({}, Bn);
  let o = {};
  Object.entries(i.posParams ?? {}).forEach(([a, c]) => {
    o[a] = c.path;
  });
  let s = i.consumed.length > 0 ? d(d({}, o), i.consumed[i.consumed.length - 1].parameters) : o;
  return {
    matched: !0,
    consumedSegments: i.consumed,
    remainingSegments: e.slice(i.consumed.length),
    parameters: s,
    positionalParamSegments: i.posParams ?? {},
  };
}
function ys(t) {
  return {
    matched: !0,
    parameters: t.length > 0 ? ai(t).parameters : {},
    consumedSegments: t,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function ni(t, n, e, r) {
  return e.length > 0 && Rs(t, e, r)
    ? { segmentGroup: new g(n, Ss(r, new g(e, t.children))), slicedSegments: [] }
    : e.length === 0 && ws(t, e, r)
    ? { segmentGroup: new g(t.segments, Cs(t, e, r, t.children)), slicedSegments: e }
    : { segmentGroup: new g(t.segments, t.children), slicedSegments: e };
}
function Cs(t, n, e, r) {
  let i = {};
  for (let o of e)
    if (Zt(t, n, o) && !r[z(o)]) {
      let s = new g([], {});
      i[z(o)] = s;
    }
  return d(d({}, r), i);
}
function Ss(t, n) {
  let e = {};
  e[p] = n;
  for (let r of t)
    if (r.path === '' && z(r) !== p) {
      let i = new g([], {});
      e[z(r)] = i;
    }
  return e;
}
function Rs(t, n, e) {
  return e.some((r) => Zt(t, n, r) && z(r) !== p);
}
function ws(t, n, e) {
  return e.some((r) => Zt(t, n, r));
}
function Zt(t, n, e) {
  return (t.hasChildren() || n.length > 0) && e.pathMatch === 'full' ? !1 : e.path === '';
}
function Es(t, n, e) {
  return n.length === 0 && !t.children[e];
}
var Vn = class {};
function Ms(t, n, e, r, i, o, s = 'emptyOnly') {
  return new qn(t, n, e, r, i, s, o).recognize();
}
var bs = 31,
  qn = class {
    injector;
    configLoader;
    rootComponentType;
    config;
    urlTree;
    paramsInheritanceStrategy;
    urlSerializer;
    applyRedirects;
    absoluteRedirectCount = 0;
    allowRedirects = !0;
    constructor(n, e, r, i, o, s, a) {
      (this.injector = n),
        (this.configLoader = e),
        (this.rootComponentType = r),
        (this.config = i),
        (this.urlTree = o),
        (this.paramsInheritanceStrategy = s),
        (this.urlSerializer = a),
        (this.applyRedirects = new Fn(this.urlSerializer, this.urlTree));
    }
    noMatchError(n) {
      return new S(4002, `'${n.segmentGroup}'`);
    }
    recognize() {
      let n = ni(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(n).pipe(
        m(({ children: e, rootSnapshot: r }) => {
          let i = new P(r, e),
            o = new et('', i),
            s = mi(r, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (s.queryParams = this.urlTree.queryParams),
            (o.url = this.urlSerializer.serialize(s)),
            { state: o, tree: s }
          );
        })
      );
    }
    match(n) {
      let e = new ce(
        [],
        Object.freeze({}),
        Object.freeze(d({}, this.urlTree.queryParams)),
        this.urlTree.fragment,
        Object.freeze({}),
        p,
        this.rootComponentType,
        null,
        {}
      );
      return this.processSegmentGroup(this.injector, this.config, n, p, e).pipe(
        m((r) => ({ children: r, rootSnapshot: e })),
        pe((r) => {
          if (r instanceof rt) return (this.urlTree = r.urlTree), this.match(r.urlTree.root);
          throw r instanceof nt ? this.noMatchError(r) : r;
        })
      );
    }
    processSegmentGroup(n, e, r, i, o) {
      return r.segments.length === 0 && r.hasChildren()
        ? this.processChildren(n, e, r, o)
        : this.processSegment(n, e, r, r.segments, i, !0, o).pipe(
            m((s) => (s instanceof P ? [s] : []))
          );
    }
    processChildren(n, e, r, i) {
      let o = [];
      for (let s of Object.keys(r.children)) s === 'primary' ? o.unshift(s) : o.push(s);
      return L(o).pipe(
        Ne((s) => {
          let a = r.children[s],
            c = Ho(e, s);
          return this.processSegmentGroup(n, c, a, s, i);
        }),
        or((s, a) => (s.push(...a), s)),
        cn(null),
        ir(),
        k((s) => {
          if (s === null) return me(r);
          let a = Di(s);
          return Os(a), h(a);
        })
      );
    }
    processSegment(n, e, r, i, o, s, a) {
      return L(e).pipe(
        Ne((c) =>
          this.processSegmentAgainstRoute(c._injector ?? n, e, c, r, i, o, s, a).pipe(
            pe((l) => {
              if (l instanceof nt) return h(null);
              throw l;
            })
          )
        ),
        Y((c) => !!c),
        pe((c) => {
          if (Ii(c)) return Es(r, i, o) ? h(new Vn()) : me(r);
          throw c;
        })
      );
    }
    processSegmentAgainstRoute(n, e, r, i, o, s, a, c) {
      return z(r) !== s && (s === p || !Zt(i, o, r))
        ? me(i)
        : r.redirectTo === void 0
        ? this.matchSegmentAgainstRoute(n, i, r, o, s, c)
        : this.allowRedirects && a
        ? this.expandSegmentAgainstRouteUsingRedirect(n, i, e, r, o, s, c)
        : me(i);
    }
    expandSegmentAgainstRouteUsingRedirect(n, e, r, i, o, s, a) {
      let {
        matched: c,
        parameters: l,
        consumedSegments: u,
        positionalParamSegments: v,
        remainingSegments: E,
      } = Ai(e, i, o);
      if (!c) return me(e);
      typeof i.redirectTo == 'string' &&
        i.redirectTo[0] === '/' &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > bs && (this.allowRedirects = !1));
      let I = new ce(
          o,
          l,
          Object.freeze(d({}, this.urlTree.queryParams)),
          this.urlTree.fragment,
          ri(i),
          z(i),
          i.component ?? i._loadedComponent ?? null,
          i,
          ii(i)
        ),
        A = Bt(I, a, this.paramsInheritanceStrategy);
      return (
        (I.params = Object.freeze(A.params)),
        (I.data = Object.freeze(A.data)),
        this.applyRedirects.applyRedirectCommands(u, i.redirectTo, v, I, n).pipe(
          D((re) => this.applyRedirects.lineralizeSegments(i, re)),
          k((re) => this.processSegment(n, r, e, re.concat(E), s, !1, a))
        )
      );
    }
    matchSegmentAgainstRoute(n, e, r, i, o, s) {
      let a = vs(e, r, i, n, this.urlSerializer);
      return (
        r.path === '**' && (e.children = {}),
        a.pipe(
          D((c) =>
            c.matched
              ? ((n = r._injector ?? n),
                this.getChildConfig(n, r, i).pipe(
                  D(({ routes: l }) => {
                    let u = r._loadedInjector ?? n,
                      { parameters: v, consumedSegments: E, remainingSegments: I } = c,
                      A = new ce(
                        E,
                        v,
                        Object.freeze(d({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        ri(r),
                        z(r),
                        r.component ?? r._loadedComponent ?? null,
                        r,
                        ii(r)
                      ),
                      he = Bt(A, s, this.paramsInheritanceStrategy);
                    (A.params = Object.freeze(he.params)), (A.data = Object.freeze(he.data));
                    let { segmentGroup: re, slicedSegments: rn } = ni(e, E, I, l);
                    if (rn.length === 0 && re.hasChildren())
                      return this.processChildren(u, l, re, A).pipe(m((ut) => new P(A, ut)));
                    if (l.length === 0 && rn.length === 0) return h(new P(A, []));
                    let qi = z(r) === o;
                    return this.processSegment(u, l, re, rn, qi ? p : o, !0, A).pipe(
                      m((ut) => new P(A, ut instanceof P ? [ut] : []))
                    );
                  })
                ))
              : me(e)
          )
        )
      );
    }
    getChildConfig(n, e, r) {
      return e.children
        ? h({ routes: e.children, injector: n })
        : e.loadChildren
        ? e._loadedRoutes !== void 0
          ? h({ routes: e._loadedRoutes, injector: e._loadedInjector })
          : hs(n, e, r, this.urlSerializer).pipe(
              k((i) =>
                i
                  ? this.configLoader.loadChildren(n, e).pipe(
                      O((o) => {
                        (e._loadedRoutes = o.routes), (e._loadedInjector = o.injector);
                      })
                    )
                  : gs(e)
              )
            )
        : h({ routes: [], injector: n });
    }
  };
function Os(t) {
  t.sort((n, e) =>
    n.value.outlet === p
      ? -1
      : e.value.outlet === p
      ? 1
      : n.value.outlet.localeCompare(e.value.outlet)
  );
}
function _s(t) {
  let n = t.value.routeConfig;
  return n && n.path === '';
}
function Di(t) {
  let n = [],
    e = new Set();
  for (let r of t) {
    if (!_s(r)) {
      n.push(r);
      continue;
    }
    let i = n.find((o) => r.value.routeConfig === o.value.routeConfig);
    i !== void 0 ? (i.children.push(...r.children), e.add(i)) : n.push(r);
  }
  for (let r of e) {
    let i = Di(r.children);
    n.push(new P(r.value, i));
  }
  return n.filter((r) => !e.has(r));
}
function ri(t) {
  return t.data || {};
}
function ii(t) {
  return t.resolve || {};
}
function Is(t, n, e, r, i, o) {
  return k((s) =>
    Ms(t, n, e, r, s.extractedUrl, i, o).pipe(
      m(({ state: a, tree: c }) => N(d({}, s), { targetSnapshot: a, urlAfterRedirects: c }))
    )
  );
}
function Ts(t, n) {
  return k((e) => {
    let {
      targetSnapshot: r,
      guards: { canActivateChecks: i },
    } = e;
    if (!i.length) return h(e);
    let o = new Set(i.map((c) => c.route)),
      s = new Set();
    for (let c of o) if (!s.has(c)) for (let l of Pi(c)) s.add(l);
    let a = 0;
    return L(s).pipe(
      Ne((c) => (o.has(c) ? As(c, r, t, n) : ((c.data = Bt(c, c.parent, t).resolve), h(void 0)))),
      O(() => a++),
      ln(1),
      k((c) => (a === s.size ? h(e) : q))
    );
  });
}
function Pi(t) {
  let n = t.children.map((e) => Pi(e)).flat();
  return [t, ...n];
}
function As(t, n, e, r) {
  let i = t.routeConfig,
    o = t._resolve;
  return (
    i?.title !== void 0 && !Ei(i) && (o[it] = i.title),
    dt(
      () => (
        (t.data = Bt(t, t.parent, e).resolve),
        Ds(o, t, n, r).pipe(m((s) => ((t._resolvedData = s), (t.data = d(d({}, t.data), s)), null)))
      )
    )
  );
}
function Ds(t, n, e, r) {
  let i = xn(t);
  if (i.length === 0) return h({});
  let o = {};
  return L(i).pipe(
    k((s) =>
      Ps(t[s], n, e, r).pipe(
        Y(),
        O((a) => {
          if (a instanceof Ee) throw Vt(new ue(), a);
          o[s] = a;
        })
      )
    ),
    ln(1),
    m(() => o),
    pe((s) => (Ii(s) ? q : xe(s)))
  );
}
function Ps(t, n, e, r) {
  let i = be(n) ?? r,
    o = _e(t, i),
    s = o.resolve ? o.resolve(n, e) : H(i, () => o(n, e));
  return Z(s);
}
function Dn(t) {
  return D((n) => {
    let e = t(n);
    return e ? L(e).pipe(m(() => n)) : h(n);
  });
}
var Kn = (() => {
    class t {
      buildTitle(e) {
        let r,
          i = e.root;
        for (; i !== void 0; )
          (r = this.getResolvedTitleForRoute(i) ?? r), (i = i.children.find((o) => o.outlet === p));
        return r;
      }
      getResolvedTitleForRoute(e) {
        return e.data[it];
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = y({ token: t, factory: () => f(xi), providedIn: 'root' });
    }
    return t;
  })(),
  xi = (() => {
    class t extends Kn {
      title;
      constructor(e) {
        super(), (this.title = e);
      }
      updateTitle(e) {
        let r = this.buildTitle(e);
        r !== void 0 && this.title.setTitle(r);
      }
      static ɵfac = function (r) {
        return new (r || t)(C(Qr));
      };
      static ɵprov = y({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })(),
  ct = new _('', { providedIn: 'root', factory: () => ({}) }),
  lt = new _(''),
  Ni = (() => {
    class t {
      componentLoaders = new WeakMap();
      childrenLoaders = new WeakMap();
      onLoadStartListener;
      onLoadEndListener;
      compiler = f(Nr);
      loadComponent(e, r) {
        if (this.componentLoaders.get(r)) return this.componentLoaders.get(r);
        if (r._loadedComponent) return h(r._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(r);
        let i = Z(H(e, () => r.loadComponent())).pipe(
            m(Li),
            D(ki),
            O((s) => {
              this.onLoadEndListener && this.onLoadEndListener(r), (r._loadedComponent = s);
            }),
            ht(() => {
              this.componentLoaders.delete(r);
            })
          ),
          o = new sn(i, () => new K()).pipe(on());
        return this.componentLoaders.set(r, o), o;
      }
      loadChildren(e, r) {
        if (this.childrenLoaders.get(r)) return this.childrenLoaders.get(r);
        if (r._loadedRoutes) return h({ routes: r._loadedRoutes, injector: r._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(r);
        let o = Ui(r, this.compiler, e, this.onLoadEndListener).pipe(
            ht(() => {
              this.childrenLoaders.delete(r);
            })
          ),
          s = new sn(o, () => new K()).pipe(on());
        return this.childrenLoaders.set(r, s), s;
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = y({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })();
function Ui(t, n, e, r) {
  return Z(H(e, () => t.loadChildren())).pipe(
    m(Li),
    D(ki),
    k((i) => (i instanceof Er || Array.isArray(i) ? h(i) : L(n.compileModuleAsync(i)))),
    m((i) => {
      r && r(t);
      let o,
        s,
        a = !1;
      return (
        Array.isArray(i)
          ? ((s = i), (a = !0))
          : ((o = i.create(e).injector), (s = o.get(lt, [], { optional: !0, self: !0 }).flat())),
        { routes: s.map(Zn), injector: o }
      );
    })
  );
}
function xs(t) {
  return t && typeof t == 'object' && 'default' in t;
}
function Li(t) {
  return xs(t) ? t.default : t;
}
function ki(t) {
  return h(t);
}
var Kt = (() => {
    class t {
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = y({ token: t, factory: () => f(Ns), providedIn: 'root' });
    }
    return t;
  })(),
  Ns = (() => {
    class t {
      shouldProcessUrl(e) {
        return !0;
      }
      extract(e) {
        return e;
      }
      merge(e, r) {
        return e;
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = y({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })(),
  ji = new _('');
var $i = new _(''),
  Hi = (() => {
    class t {
      currentNavigation = oe(null, { equal: () => !1 });
      currentTransition = null;
      lastSuccessfulNavigation = null;
      events = new K();
      transitionAbortWithErrorSubject = new K();
      configLoader = f(Ni);
      environmentInjector = f(Ue);
      destroyRef = f(dr);
      urlSerializer = f(ot);
      rootContexts = f(Oe);
      location = f(Ct);
      inputBindingEnabled = f(Wt, { optional: !0 }) !== null;
      titleStrategy = f(Kn);
      options = f(ct, { optional: !0 }) || {};
      paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || 'emptyOnly';
      urlHandlingStrategy = f(Kt);
      createViewTransition = f(ji, { optional: !0 });
      navigationErrorHandler = f($i, { optional: !0 });
      navigationId = 0;
      get hasRequestedNavigation() {
        return this.navigationId !== 0;
      }
      transitions;
      afterPreactivation = () => h(void 0);
      rootComponentType = null;
      destroyed = !1;
      constructor() {
        let e = (i) => this.events.next(new Ut(i)),
          r = (i) => this.events.next(new Lt(i));
        (this.configLoader.onLoadEndListener = r),
          (this.configLoader.onLoadStartListener = e),
          this.destroyRef.onDestroy(() => {
            this.destroyed = !0;
          });
      }
      complete() {
        this.transitions?.complete();
      }
      handleNavigationRequest(e) {
        let r = ++this.navigationId;
        se(() => {
          this.transitions?.next(
            N(d({}, e), {
              extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl),
              targetSnapshot: null,
              targetRouterState: null,
              guards: { canActivateChecks: [], canDeactivateChecks: [] },
              guardsResult: null,
              abortController: new AbortController(),
              id: r,
            })
          );
        });
      }
      setupNavigations(e) {
        return (
          (this.transitions = new U(null)),
          this.transitions.pipe(
            ie((r) => r !== null),
            D((r) => {
              let i = !1;
              return h(r).pipe(
                D((o) => {
                  if (this.navigationId > r.id)
                    return this.cancelNavigationTransition(r, '', T.SupersededByNewNavigation), q;
                  (this.currentTransition = r),
                    this.currentNavigation.set({
                      id: o.id,
                      initialUrl: o.rawUrl,
                      extractedUrl: o.extractedUrl,
                      targetBrowserUrl:
                        typeof o.extras.browserUrl == 'string'
                          ? this.urlSerializer.parse(o.extras.browserUrl)
                          : o.extras.browserUrl,
                      trigger: o.source,
                      extras: o.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? N(d({}, this.lastSuccessfulNavigation), { previousNavigation: null })
                        : null,
                      abort: () => o.abortController.abort(),
                    });
                  let s =
                      !e.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl(),
                    a = o.extras.onSameUrlNavigation ?? e.onSameUrlNavigation;
                  if (!s && a !== 'reload')
                    return (
                      this.events.next(
                        new W(
                          o.id,
                          this.urlSerializer.serialize(o.rawUrl),
                          '',
                          Ye.IgnoredSameUrlNavigation
                        )
                      ),
                      o.resolve(!1),
                      q
                    );
                  if (this.urlHandlingStrategy.shouldProcessUrl(o.rawUrl))
                    return h(o).pipe(
                      D(
                        (c) => (
                          this.events.next(
                            new de(
                              c.id,
                              this.urlSerializer.serialize(c.extractedUrl),
                              c.source,
                              c.restoredState
                            )
                          ),
                          c.id !== this.navigationId ? q : Promise.resolve(c)
                        )
                      ),
                      Is(
                        this.environmentInjector,
                        this.configLoader,
                        this.rootComponentType,
                        e.config,
                        this.urlSerializer,
                        this.paramsInheritanceStrategy
                      ),
                      O((c) => {
                        (r.targetSnapshot = c.targetSnapshot),
                          (r.urlAfterRedirects = c.urlAfterRedirects),
                          this.currentNavigation.update(
                            (u) => ((u.finalUrl = c.urlAfterRedirects), u)
                          );
                        let l = new Qe(
                          c.id,
                          this.urlSerializer.serialize(c.extractedUrl),
                          this.urlSerializer.serialize(c.urlAfterRedirects),
                          c.targetSnapshot
                        );
                        this.events.next(l);
                      })
                    );
                  if (s && this.urlHandlingStrategy.shouldProcessUrl(o.currentRawUrl)) {
                    let { id: c, extractedUrl: l, source: u, restoredState: v, extras: E } = o,
                      I = new de(c, this.urlSerializer.serialize(l), u, v);
                    this.events.next(I);
                    let A = Ri(this.rootComponentType).snapshot;
                    return (
                      (this.currentTransition = r =
                        N(d({}, o), {
                          targetSnapshot: A,
                          urlAfterRedirects: l,
                          extras: N(d({}, E), { skipLocationChange: !1, replaceUrl: !1 }),
                        })),
                      this.currentNavigation.update((he) => ((he.finalUrl = l), he)),
                      h(r)
                    );
                  } else
                    return (
                      this.events.next(
                        new W(
                          o.id,
                          this.urlSerializer.serialize(o.extractedUrl),
                          '',
                          Ye.IgnoredByUrlHandlingStrategy
                        )
                      ),
                      o.resolve(!1),
                      q
                    );
                }),
                O((o) => {
                  let s = new Dt(
                    o.id,
                    this.urlSerializer.serialize(o.extractedUrl),
                    this.urlSerializer.serialize(o.urlAfterRedirects),
                    o.targetSnapshot
                  );
                  this.events.next(s);
                }),
                m(
                  (o) => (
                    (this.currentTransition = r =
                      N(d({}, o), {
                        guards: Wo(o.targetSnapshot, o.currentSnapshot, this.rootContexts),
                      })),
                    r
                  )
                ),
                is(this.environmentInjector, (o) => this.events.next(o)),
                O((o) => {
                  if (
                    ((r.guardsResult = o.guardsResult),
                    o.guardsResult && typeof o.guardsResult != 'boolean')
                  )
                    throw Vt(this.urlSerializer, o.guardsResult);
                  let s = new Pt(
                    o.id,
                    this.urlSerializer.serialize(o.extractedUrl),
                    this.urlSerializer.serialize(o.urlAfterRedirects),
                    o.targetSnapshot,
                    !!o.guardsResult
                  );
                  this.events.next(s);
                }),
                ie((o) =>
                  o.guardsResult
                    ? !0
                    : (this.cancelNavigationTransition(o, '', T.GuardRejected), !1)
                ),
                Dn((o) => {
                  if (o.guards.canActivateChecks.length !== 0)
                    return h(o).pipe(
                      O((s) => {
                        let a = new xt(
                          s.id,
                          this.urlSerializer.serialize(s.extractedUrl),
                          this.urlSerializer.serialize(s.urlAfterRedirects),
                          s.targetSnapshot
                        );
                        this.events.next(a);
                      }),
                      D((s) => {
                        let a = !1;
                        return h(s).pipe(
                          Ts(this.paramsInheritanceStrategy, this.environmentInjector),
                          O({
                            next: () => (a = !0),
                            complete: () => {
                              a || this.cancelNavigationTransition(s, '', T.NoDataFromResolver);
                            },
                          })
                        );
                      }),
                      O((s) => {
                        let a = new Nt(
                          s.id,
                          this.urlSerializer.serialize(s.extractedUrl),
                          this.urlSerializer.serialize(s.urlAfterRedirects),
                          s.targetSnapshot
                        );
                        this.events.next(a);
                      })
                    );
                }),
                Dn((o) => {
                  let s = (a) => {
                    let c = [];
                    if (a.routeConfig?.loadComponent) {
                      let l = be(a) ?? this.environmentInjector;
                      c.push(
                        this.configLoader.loadComponent(l, a.routeConfig).pipe(
                          O((u) => {
                            a.component = u;
                          }),
                          m(() => {})
                        )
                      );
                    }
                    for (let l of a.children) c.push(...s(l));
                    return c;
                  };
                  return an(s(o.targetSnapshot.root)).pipe(cn(null), fe(1));
                }),
                Dn(() => this.afterPreactivation()),
                D(() => {
                  let { currentSnapshot: o, targetSnapshot: s } = r,
                    a = this.createViewTransition?.(this.environmentInjector, o.root, s.root);
                  return a ? L(a).pipe(m(() => r)) : h(r);
                }),
                m((o) => {
                  let s = Fo(e.routeReuseStrategy, o.targetSnapshot, o.currentRouterState);
                  return (
                    (this.currentTransition = r = N(d({}, o), { targetRouterState: s })),
                    this.currentNavigation.update((a) => ((a.targetRouterState = s), a)),
                    r
                  );
                }),
                O(() => {
                  this.events.next(new Je());
                }),
                Go(
                  this.rootContexts,
                  e.routeReuseStrategy,
                  (o) => this.events.next(o),
                  this.inputBindingEnabled
                ),
                fe(1),
                un(
                  new er((o) => {
                    let s = r.abortController.signal,
                      a = () => o.next();
                    return s.addEventListener('abort', a), () => s.removeEventListener('abort', a);
                  }).pipe(
                    ie(() => !i && !r.targetRouterState),
                    O(() => {
                      this.cancelNavigationTransition(
                        r,
                        r.abortController.signal.reason + '',
                        T.Aborted
                      );
                    })
                  )
                ),
                O({
                  next: (o) => {
                    (i = !0),
                      (this.lastSuccessfulNavigation = se(this.currentNavigation)),
                      this.events.next(
                        new G(
                          o.id,
                          this.urlSerializer.serialize(o.extractedUrl),
                          this.urlSerializer.serialize(o.urlAfterRedirects)
                        )
                      ),
                      this.titleStrategy?.updateTitle(o.targetRouterState.snapshot),
                      o.resolve(!0);
                  },
                  complete: () => {
                    i = !0;
                  },
                }),
                un(
                  this.transitionAbortWithErrorSubject.pipe(
                    O((o) => {
                      throw o;
                    })
                  )
                ),
                ht(() => {
                  i || this.cancelNavigationTransition(r, '', T.SupersededByNewNavigation),
                    this.currentTransition?.id === r.id &&
                      (this.currentNavigation.set(null), (this.currentTransition = null));
                }),
                pe((o) => {
                  if (this.destroyed) return r.resolve(!1), q;
                  if (((i = !0), _i(o)))
                    this.events.next(
                      new B(
                        r.id,
                        this.urlSerializer.serialize(r.extractedUrl),
                        o.message,
                        o.cancellationCode
                      )
                    ),
                      qo(o)
                        ? this.events.next(new we(o.url, o.navigationBehaviorOptions))
                        : r.resolve(!1);
                  else {
                    let s = new Re(
                      r.id,
                      this.urlSerializer.serialize(r.extractedUrl),
                      o,
                      r.targetSnapshot ?? void 0
                    );
                    try {
                      let a = H(this.environmentInjector, () => this.navigationErrorHandler?.(s));
                      if (a instanceof Ee) {
                        let { message: c, cancellationCode: l } = Vt(this.urlSerializer, a);
                        this.events.next(
                          new B(r.id, this.urlSerializer.serialize(r.extractedUrl), c, l)
                        ),
                          this.events.next(new we(a.redirectTo, a.navigationBehaviorOptions));
                      } else throw (this.events.next(s), o);
                    } catch (a) {
                      this.options.resolveNavigationPromiseOnError ? r.resolve(!1) : r.reject(a);
                    }
                  }
                  return q;
                })
              );
            })
          )
        );
      }
      cancelNavigationTransition(e, r, i) {
        let o = new B(e.id, this.urlSerializer.serialize(e.extractedUrl), r, i);
        this.events.next(o), e.resolve(!1);
      }
      isUpdatingInternalState() {
        return (
          this.currentTransition?.extractedUrl.toString() !==
          this.currentTransition?.currentUrlTree.toString()
        );
      }
      isUpdatedBrowserUrl() {
        let e = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),
          r = se(this.currentNavigation),
          i = r?.targetBrowserUrl ?? r?.extractedUrl;
        return e.toString() !== i?.toString() && !r?.extras.skipLocationChange;
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = y({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })();
function Us(t) {
  return t !== We;
}
var zi = (() => {
    class t {
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = y({ token: t, factory: () => f(Ls), providedIn: 'root' });
    }
    return t;
  })(),
  Gt = class {
    shouldDetach(n) {
      return !1;
    }
    store(n, e) {}
    shouldAttach(n) {
      return !1;
    }
    retrieve(n) {
      return null;
    }
    shouldReuseRoute(n, e) {
      return n.routeConfig === e.routeConfig;
    }
  },
  Ls = (() => {
    class t extends Gt {
      static ɵfac = (() => {
        let e;
        return function (i) {
          return (e || (e = fn(t)))(i || t);
        };
      })();
      static ɵprov = y({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })(),
  Fi = (() => {
    class t {
      urlSerializer = f(ot);
      options = f(ct, { optional: !0 }) || {};
      canceledNavigationResolution = this.options.canceledNavigationResolution || 'replace';
      location = f(Ct);
      urlHandlingStrategy = f(Kt);
      urlUpdateStrategy = this.options.urlUpdateStrategy || 'deferred';
      currentUrlTree = new V();
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      rawUrlTree = this.currentUrlTree;
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      createBrowserPath({ finalUrl: e, initialUrl: r, targetBrowserUrl: i }) {
        let o = e !== void 0 ? this.urlHandlingStrategy.merge(e, r) : r,
          s = i ?? o;
        return s instanceof V ? this.urlSerializer.serialize(s) : s;
      }
      commitTransition({ targetRouterState: e, finalUrl: r, initialUrl: i }) {
        r && e
          ? ((this.currentUrlTree = r),
            (this.rawUrlTree = this.urlHandlingStrategy.merge(r, i)),
            (this.routerState = e))
          : (this.rawUrlTree = i);
      }
      routerState = Ri(null);
      getRouterState() {
        return this.routerState;
      }
      stateMemento = this.createStateMemento();
      updateStateMemento() {
        this.stateMemento = this.createStateMemento();
      }
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState,
        };
      }
      resetInternalState({ finalUrl: e }) {
        (this.routerState = this.stateMemento.routerState),
          (this.currentUrlTree = this.stateMemento.currentUrlTree),
          (this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            e ?? this.rawUrlTree
          ));
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = y({ token: t, factory: () => f(ks), providedIn: 'root' });
    }
    return t;
  })(),
  ks = (() => {
    class t extends Fi {
      currentPageId = 0;
      lastSuccessfulId = -1;
      restoredState() {
        return this.location.getState();
      }
      get browserPageId() {
        return this.canceledNavigationResolution !== 'computed'
          ? this.currentPageId
          : this.restoredState()?.ɵrouterPageId ?? this.currentPageId;
      }
      registerNonRouterCurrentEntryChangeListener(e) {
        return this.location.subscribe((r) => {
          r.type === 'popstate' &&
            setTimeout(() => {
              e(r.url, r.state, 'popstate');
            });
        });
      }
      handleRouterEvent(e, r) {
        e instanceof de
          ? this.updateStateMemento()
          : e instanceof W
          ? this.commitTransition(r)
          : e instanceof Qe
          ? this.urlUpdateStrategy === 'eager' &&
            (r.extras.skipLocationChange || this.setBrowserUrl(this.createBrowserPath(r), r))
          : e instanceof Je
          ? (this.commitTransition(r),
            this.urlUpdateStrategy === 'deferred' &&
              !r.extras.skipLocationChange &&
              this.setBrowserUrl(this.createBrowserPath(r), r))
          : e instanceof B && e.code !== T.SupersededByNewNavigation && e.code !== T.Redirect
          ? this.restoreHistory(r)
          : e instanceof Re
          ? this.restoreHistory(r, !0)
          : e instanceof G &&
            ((this.lastSuccessfulId = e.id), (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(e, { extras: r, id: i }) {
        let { replaceUrl: o, state: s } = r;
        if (this.location.isCurrentPathEqualTo(e) || o) {
          let a = this.browserPageId,
            c = d(d({}, s), this.generateNgRouterState(i, a));
          this.location.replaceState(e, '', c);
        } else {
          let a = d(d({}, s), this.generateNgRouterState(i, this.browserPageId + 1));
          this.location.go(e, '', a);
        }
      }
      restoreHistory(e, r = !1) {
        if (this.canceledNavigationResolution === 'computed') {
          let i = this.browserPageId,
            o = this.currentPageId - i;
          o !== 0
            ? this.location.historyGo(o)
            : this.getCurrentUrlTree() === e.finalUrl &&
              o === 0 &&
              (this.resetInternalState(e), this.resetUrlToCurrentUrlTree());
        } else
          this.canceledNavigationResolution === 'replace' &&
            (r && this.resetInternalState(e), this.resetUrlToCurrentUrlTree());
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.getRawUrlTree()),
          '',
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)
        );
      }
      generateNgRouterState(e, r) {
        return this.canceledNavigationResolution === 'computed'
          ? { navigationId: e, ɵrouterPageId: r }
          : { navigationId: e };
      }
      static ɵfac = (() => {
        let e;
        return function (i) {
          return (e || (e = fn(t)))(i || t);
        };
      })();
      static ɵprov = y({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })();
function Yn(t, n) {
  t.events
    .pipe(
      ie((e) => e instanceof G || e instanceof B || e instanceof Re || e instanceof W),
      m((e) =>
        e instanceof G || e instanceof W
          ? 0
          : (e instanceof B ? e.code === T.Redirect || e.code === T.SupersededByNewNavigation : !1)
          ? 2
          : 1
      ),
      ie((e) => e !== 2),
      fe(1)
    )
    .subscribe(() => {
      n();
    });
}
var js = { paths: 'exact', fragment: 'ignored', matrixParams: 'ignored', queryParams: 'exact' },
  $s = { paths: 'subset', fragment: 'ignored', matrixParams: 'ignored', queryParams: 'subset' },
  Yt = (() => {
    class t {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      disposed = !1;
      nonRouterCurrentEntryChangeSubscription;
      console = f(Or);
      stateManager = f(Fi);
      options = f(ct, { optional: !0 }) || {};
      pendingTasks = f(pr);
      urlUpdateStrategy = this.options.urlUpdateStrategy || 'deferred';
      navigationTransitions = f(Hi);
      urlSerializer = f(ot);
      location = f(Ct);
      urlHandlingStrategy = f(Kt);
      injector = f(Ue);
      _events = new K();
      get events() {
        return this._events;
      }
      get routerState() {
        return this.stateManager.getRouterState();
      }
      navigated = !1;
      routeReuseStrategy = f(zi);
      onSameUrlNavigation = this.options.onSameUrlNavigation || 'ignore';
      config = f(lt, { optional: !0 })?.flat() ?? [];
      componentInputBindingEnabled = !!f(Wt, { optional: !0 });
      currentNavigation = this.navigationTransitions.currentNavigation.asReadonly();
      constructor() {
        this.resetConfig(this.config),
          this.navigationTransitions.setupNavigations(this).subscribe({
            error: (e) => {
              this.console.warn(e);
            },
          }),
          this.subscribeToNavigationEvents();
      }
      eventsSubscription = new Jn();
      subscribeToNavigationEvents() {
        let e = this.navigationTransitions.events.subscribe((r) => {
          try {
            let i = this.navigationTransitions.currentTransition,
              o = se(this.navigationTransitions.currentNavigation);
            if (i !== null && o !== null) {
              if (
                (this.stateManager.handleRouterEvent(r, o),
                r instanceof B && r.code !== T.Redirect && r.code !== T.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (r instanceof G) this.navigated = !0;
              else if (r instanceof we) {
                let s = r.navigationBehaviorOptions,
                  a = this.urlHandlingStrategy.merge(r.url, i.currentRawUrl),
                  c = d(
                    {
                      browserUrl: i.extras.browserUrl,
                      info: i.extras.info,
                      skipLocationChange: i.extras.skipLocationChange,
                      replaceUrl:
                        i.extras.replaceUrl || this.urlUpdateStrategy === 'eager' || Us(i.source),
                    },
                    s
                  );
                this.scheduleNavigation(a, We, null, c, {
                  resolve: i.resolve,
                  reject: i.reject,
                  promise: i.promise,
                });
              }
            }
            jo(r) && this._events.next(r);
          } catch (i) {
            this.navigationTransitions.transitionAbortWithErrorSubject.next(i);
          }
        });
        this.eventsSubscription.add(e);
      }
      resetRootComponentType(e) {
        (this.routerState.root.component = e), (this.navigationTransitions.rootComponentType = e);
      }
      initialNavigation() {
        this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
            this.navigateToSyncWithBrowser(
              this.location.path(!0),
              We,
              this.stateManager.restoredState()
            );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener((e, r, i) => {
            this.navigateToSyncWithBrowser(e, i, r);
          });
      }
      navigateToSyncWithBrowser(e, r, i) {
        let o = { replaceUrl: !0 },
          s = i?.navigationId ? i : null;
        if (i) {
          let c = d({}, i);
          delete c.navigationId,
            delete c.ɵrouterPageId,
            Object.keys(c).length !== 0 && (o.state = c);
        }
        let a = this.parseUrl(e);
        this.scheduleNavigation(a, r, s, o).catch((c) => {
          this.disposed || this.injector.get(pn)(c);
        });
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      getCurrentNavigation() {
        return se(this.navigationTransitions.currentNavigation);
      }
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      resetConfig(e) {
        (this.config = e.map(Zn)), (this.navigated = !1);
      }
      ngOnDestroy() {
        this.dispose();
      }
      dispose() {
        this._events.unsubscribe(),
          this.navigationTransitions.complete(),
          this.nonRouterCurrentEntryChangeSubscription &&
            (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            (this.nonRouterCurrentEntryChangeSubscription = void 0)),
          (this.disposed = !0),
          this.eventsSubscription.unsubscribe();
      }
      createUrlTree(e, r = {}) {
        let {
            relativeTo: i,
            queryParams: o,
            fragment: s,
            queryParamsHandling: a,
            preserveFragment: c,
          } = r,
          l = c ? this.currentUrlTree.fragment : s,
          u = null;
        switch (a ?? this.options.defaultQueryParamsHandling) {
          case 'merge':
            u = d(d({}, this.currentUrlTree.queryParams), o);
            break;
          case 'preserve':
            u = this.currentUrlTree.queryParams;
            break;
          default:
            u = o || null;
        }
        u !== null && (u = this.removeEmptyProps(u));
        let v;
        try {
          let E = i ? i.snapshot : this.routerState.snapshot.root;
          v = vi(E);
        } catch {
          (typeof e[0] != 'string' || e[0][0] !== '/') && (e = []), (v = this.currentUrlTree.root);
        }
        return yi(v, e, u, l ?? null);
      }
      navigateByUrl(e, r = { skipLocationChange: !1 }) {
        let i = Se(e) ? e : this.parseUrl(e),
          o = this.urlHandlingStrategy.merge(i, this.rawUrlTree);
        return this.scheduleNavigation(o, We, null, r);
      }
      navigate(e, r = { skipLocationChange: !1 }) {
        return Hs(e), this.navigateByUrl(this.createUrlTree(e, r), r);
      }
      serializeUrl(e) {
        return this.urlSerializer.serialize(e);
      }
      parseUrl(e) {
        try {
          return this.urlSerializer.parse(e);
        } catch {
          return this.console.warn(ar(4018, !1)), this.urlSerializer.parse('/');
        }
      }
      isActive(e, r) {
        let i;
        if ((r === !0 ? (i = d({}, js)) : r === !1 ? (i = d({}, $s)) : (i = r), Se(e)))
          return Jr(this.currentUrlTree, e, i);
        let o = this.parseUrl(e);
        return Jr(this.currentUrlTree, o, i);
      }
      removeEmptyProps(e) {
        return Object.entries(e).reduce((r, [i, o]) => (o != null && (r[i] = o), r), {});
      }
      scheduleNavigation(e, r, i, o, s) {
        if (this.disposed) return Promise.resolve(!1);
        let a, c, l;
        s
          ? ((a = s.resolve), (c = s.reject), (l = s.promise))
          : (l = new Promise((v, E) => {
              (a = v), (c = E);
            }));
        let u = this.pendingTasks.add();
        return (
          Yn(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(u));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: r,
            restoredState: i,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: e,
            extras: o,
            resolve: a,
            reject: c,
            promise: l,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          l.catch((v) => Promise.reject(v))
        );
      }
      static ɵfac = function (r) {
        return new (r || t)();
      };
      static ɵprov = y({ token: t, factory: t.ɵfac, providedIn: 'root' });
    }
    return t;
  })();
function Hs(t) {
  for (let n = 0; n < t.length; n++) if (t[n] == null) throw new S(4008, !1);
}
var Fs = new _('');
function Qn(t, ...n) {
  return lr([
    { provide: lt, multi: !0, useValue: t },
    [],
    { provide: ne, useFactory: Bs, deps: [Yt] },
    { provide: Ir, multi: !0, useFactory: Vs },
    n.map((e) => e.ɵproviders),
  ]);
}
function Bs(t) {
  return t.routerState.root;
}
function Vs() {
  let t = f(dn);
  return (n) => {
    let e = t.get(Tr);
    if (n !== e.components[0]) return;
    let r = t.get(Yt),
      i = t.get(qs);
    t.get(Gs) === 1 && r.initialNavigation(),
      t.get(Ws, null, { optional: !0 })?.setUpPreloading(),
      t.get(Fs, null, { optional: !0 })?.init(),
      r.resetRootComponentType(e.componentTypes[0]),
      i.closed || (i.next(), i.complete(), i.unsubscribe());
  };
}
var qs = new _('', { factory: () => new K() }),
  Gs = new _('', { providedIn: 'root', factory: () => 1 });
var Ws = new _('');
var Ie = class Ie {};
(Ie.ɵfac = function (e) {
  return new (e || Ie)();
}),
  (Ie.ɵcmp = $({
    type: Ie,
    selectors: [['app-header']],
    decls: 37,
    vars: 0,
    consts: [
      [
        'src',
        'assets/img/may.jpeg',
        'alt',
        'Mayssa Barbosa - Foto de Perfil',
        'width',
        '130px',
        'height',
        '130px',
        'loading',
        'eager',
      ],
      [1, 'container'],
      ['href', 'assets/pdf/cv.pdf', 'target', '_blank', 1, 'btn', 'btn-primary'],
      [
        'href',
        'https://www.linkedin.com/in/mayssa-barbosa-dias/',
        'target',
        '_blank',
        1,
        'btn',
        'btn-secondary',
      ],
      [
        'src',
        'assets/icons/whatsapp.svg',
        'alt',
        '\xCDcone para contato do WhatsApp',
        'width',
        '22px',
        'height',
        '24px',
      ],
      [
        'href',
        'https://api.whatsapp.com/send?phone=5561984611349&text=Ol%C3%A1%20Mayssa,%20preciso%20de%20um%20job!',
        'target',
        '_blank',
      ],
      [
        'src',
        'assets/icons/mail.svg',
        'alt',
        '\xCDcone para contato do E-mail',
        'width',
        '22px',
        'height',
        '24px',
      ],
      ['href', 'mailto:mayssabdias@gmail.com', 'target', '_blank'],
    ],
    template: function (e, r) {
      e & 1 &&
        (R(0, 'header'),
        X(1, 'img', 0),
        R(2, 'h1'),
        M(3, 'Mayssa Barbosa'),
        w()(),
        R(4, 'aside')(5, 'div', 1)(6, 'p'),
        M(7, 'Full-Stack JavaScript | Angular | NodeJs | Typescript | Python | Java'),
        w(),
        R(8, 'p'),
        M(9, 'Brasilia, Distrito Federal, Brasil'),
        w(),
        R(10, 'p'),
        M(
          11,
          ' Estou na \xE1rea de desenvolvimento de Software h\xE1 2 anos. Devido isso resolvi abra\xE7ar a stack JS pois atua no Frontend / Backend. '
        ),
        w(),
        R(12, 'nav')(13, 'ul')(14, 'li')(15, 'a', 2),
        M(16, ' Download Cv '),
        w()(),
        R(17, 'li')(18, 'a', 3),
        M(19, ' LinkedIn '),
        w()()()(),
        R(20, 'section')(21, 'figure'),
        X(22, 'img', 4),
        R(23, 'figcaption')(24, 'a', 5)(25, 'strong'),
        M(26, 'Envie uma menssagem para:'),
        w(),
        R(27, 'p'),
        M(28, 'WhatsApp: (61) 9 8461-1349'),
        w()()()(),
        R(29, 'figure'),
        X(30, 'img', 6),
        R(31, 'figcaption')(32, 'a', 7)(33, 'strong'),
        M(34, 'Envie um email para:'),
        w(),
        R(35, 'p'),
        M(36, 'E-mail: mayssabdias@gmail.com'),
        w()()()()()()());
    },
    styles: [
      '[_nghost-%COMP%]:before{content:"";display:flex;width:100%;height:150px;margin-bottom:-65px;background:var(--primary)}[_nghost-%COMP%]   header[_ngcontent-%COMP%], [_nghost-%COMP%]   aside[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:100px;border:5px solid var(--white);margin-bottom:15px}[_nghost-%COMP%]   aside[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], [_nghost-%COMP%]   aside[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;gap:30px}[_nghost-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{margin:20px 0}[_nghost-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:250px}[_nghost-%COMP%]   aside[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{width:335px;height:77px;margin:0;padding:0;display:flex;justify-content:center;align-items:center;gap:20px;border:1px solid var(--white);border-radius:7px}[_nghost-%COMP%]   aside[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:flex-start;flex-direction:column}[_nghost-%COMP%]   aside[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:3px 0}[_nghost-%COMP%]   aside[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--primary)}@media (max-width: 750px){[_nghost-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{flex-direction:column;gap:15px}[_nghost-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], [_nghost-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   aside[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{flex-direction:column;gap:15px}[_nghost-%COMP%]   aside[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{width:100%}}',
    ],
  }));
var Qt = Ie;
function Ks(t, n) {
  if ((t & 1 && (R(0, 'li'), X(1, 'img', 1), w()), t & 2)) {
    let e = n.$implicit;
    Q(), yt('src', e.src, yr)('alt', e.alt);
  }
}
var Te = class Te {
  constructor() {
    this.arrayKnowledge = oe([
      { src: 'assets/icons/knowledge/angular.svg', alt: '\xCDcone de conhecimento de Angular' },
      { src: 'assets/icons/knowledge/java.svg', alt: '\xCDcone de conhecimento de Java' },
      {
        src: 'assets/icons/knowledge/javascript.svg',
        alt: '\xCDcone de conhecimento de JavaScript',
      },
      { src: 'assets/icons/knowledge/nodejs.svg', alt: '\xCDcone de conhecimento de NodeJs' },
      { src: 'assets/icons/knowledge/python.svg', alt: '\xCDcone de conhecimento de Python' },
      { src: 'assets/icons/knowledge/type.svg', alt: '\xCDcone de conhecimento de TypeScript' },
    ]);
  }
};
(Te.ɵfac = function (e) {
  return new (e || Te)();
}),
  (Te.ɵcmp = $({
    type: Te,
    selectors: [['app-knowledge']],
    decls: 6,
    vars: 0,
    consts: [
      [1, 'container'],
      ['loading', 'lazy', 'width', '22px', 'height', '24px', 3, 'src', 'alt'],
    ],
    template: function (e, r) {
      e & 1 &&
        (R(0, 'div', 0)(1, 'h2'),
        M(2, 'Conhecimentos'),
        w(),
        R(3, 'ul'),
        ft(4, Ks, 2, 2, 'li', null, pt),
        w()()),
        e & 2 && (Q(4), gt(r.arrayKnowledge()));
    },
    styles: [
      '[_nghost-%COMP%]{margin-top:25px;padding:25px 0;background:var(--black-010);display:flex;justify-content:center;align-items:center;flex-direction:column}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;margin:0}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:0;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:5px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:50px;height:50px;background-color:var(--black);display:flex;justify-content:center;align-items:center;border-radius:7px}',
    ],
  }));
var Xt = Te;
function Ys(t, n) {
  if (
    (t & 1 &&
      (R(0, 'details')(1, 'summary')(2, 'p')(3, 'strong'),
      M(4),
      w(),
      M(5),
      w()(),
      X(6, 'article', 1),
      w()),
    t & 2)
  ) {
    let e = n.$implicit;
    Q(4), Pr(e.summary.strong), Q(), xr(' ', e.summary.p, ' '), Q(), yt('innerHTML', e.text, vr);
  }
}
var Ae = class Ae {
  constructor() {
    this.arrayExperiences = oe([
      {
        summary: {
          strong: 'Est\xE1gio em Desenvolvimento de Software',
          p: 'Supremo Tribunal Federal | Maio 2024 - Atual',
        },
        text: '<p>Atuo no versionamento de buckets S3 com MinIO, automa\xE7\xE3o de testes e testes de qualidade. Participo do desenvolvimento de aplicativos mobile (Android Studio), atualiza\xE7\xE3o de projetos legados em Angular e no desenvolvimento e manuten\xE7\xE3o de sistemas Full Stack.',
      },
      {
        summary: {
          strong: 'Freelancer em Desenvolvimento de Websites',
          p: 'Freelancer | Maio 2024 - Atual',
        },
        text: '<p>Atuo no desenvolvimento de sites para clientes utilizando tanto WordPress assim como em c\xF3digo tamb\xE9m, cria\xE7\xE3o de frontends com integra\xE7\xE3o ao Supabase em React e TypeScript, desenvolvimento e manuten\xE7\xE3o de FrontEnd e BackEnd, al\xE9m da elabora\xE7\xE3o de prot\xF3tipos de m\xE9dia e alta fidelidade em colabora\xE7\xE3o com stakeholders.',
      },
    ]);
  }
};
(Ae.ɵfac = function (e) {
  return new (e || Ae)();
}),
  (Ae.ɵcmp = $({
    type: Ae,
    selectors: [['app-experiences']],
    decls: 5,
    vars: 0,
    consts: [
      [1, 'container'],
      [3, 'innerHTML'],
    ],
    template: function (e, r) {
      e & 1 &&
        (R(0, 'div', 0)(1, 'h2'),
        M(2, '\xDAltimas Experi\xEAncias'),
        w(),
        ft(3, Ys, 7, 3, 'details', null, pt),
        w()),
        e & 2 && (Q(3), gt(r.arrayExperiences()));
    },
    styles: [
      '[_nghost-%COMP%]{margin-top:25px;display:flex;justify-content:center;align-items:center;flex-direction:column}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;margin:0 0 25px}[_nghost-%COMP%]   details[_ngcontent-%COMP%]{overflow:hidden;margin-top:10px;background:var(--black-010);border-radius:7px}[_nghost-%COMP%]   details[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%], [_nghost-%COMP%]   details[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{padding:10px 20px;transition:.5s}[_nghost-%COMP%]   details[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]{cursor:pointer;display:flex;justify-content:space-between;align-items:center;background:var(--primary)}[_nghost-%COMP%]   details[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:var(--black-010);padding:0;margin:0;display:flex;flex-direction:column}[_nghost-%COMP%]   details[open][_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]{border-radius:7px 7px 0 0}[_nghost-%COMP%]   details[open][_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]:after{content:url("./media/chevron-up-SZCXHYYP.svg");margin-top:5px}[_nghost-%COMP%]   details[_ngcontent-%COMP%]:not([open])   summary[_ngcontent-%COMP%]:after{content:url("./media/chevron-down-FPIO47WG.svg");margin-top:5px}',
    ],
  }));
var en = Ae;
var Qs = () => [import('./chunk-3Z3GX43E.js').then((t) => t.Projects)];
function Js(t, n) {
  t & 1 && J(0, 'app-projects');
}
function Xs(t, n) {
  t & 1 &&
    (mt(0, 'section')(1, 'h2'), M(2, 'Carregando todos os projetos desenvolvidos...'), vt()());
}
function ea(t, n) {
  t & 1 &&
    (mt(0, 'section')(1, 'h2'),
    M(2, 'Ocorreu um erro no download do componente, tente novamente...'),
    vt()());
}
var De = class De {};
(De.ɵfac = function (e) {
  return new (e || De)();
}),
  (De.ɵcmp = $({
    type: De,
    selectors: [['app-home']],
    decls: 9,
    vars: 0,
    template: function (e, r) {
      e & 1 &&
        (J(0, 'app-header'),
        mt(1, 'main'),
        J(2, 'app-knowledge')(3, 'app-experiences'),
        br(4, Js, 1, 0)(5, Xs, 3, 0)(6, ea, 3, 0),
        Ar(7, 4, Qs, null, 5, 6),
        Dr(0, -1),
        vt());
    },
    dependencies: [Qt, Xt, en],
    styles: [
      '[_nghost-%COMP%]   section[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:20px 0;text-align:center}',
    ],
  }));
var tn = De;
var Bi = [{ path: '', component: tn }];
var Vi = { providers: [hr(), Ur({ eventCoalescing: !0 }), Qn(Bi)] };
var Pe = class Pe {};
(Pe.ɵfac = function (e) {
  return new (e || Pe)();
}),
  (Pe.ɵcmp = $({
    type: Pe,
    selectors: [['app-root']],
    decls: 1,
    vars: 0,
    template: function (e, r) {
      e & 1 && J(0, 'router-outlet');
    },
    dependencies: [st],
    encapsulation: 2,
  }));
var nn = Pe;
_n(nn, Vi).catch((t) => console.error(t));
