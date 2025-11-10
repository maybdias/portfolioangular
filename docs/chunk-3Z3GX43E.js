import {
  $ as ui,
  $a as Ot,
  Aa as b,
  B as hi,
  Ba as V,
  Ca as ye,
  Cb as Di,
  D as j,
  Da as L,
  E as wt,
  Ea as re,
  Fa as Et,
  Ga as Ue,
  Gb as Oi,
  Ha as Dt,
  K as He,
  Ka as R,
  L as Z,
  La as C,
  Ma as A,
  N as ve,
  Na as z,
  Oa as vi,
  Pa as Xe,
  R as h,
  S as y,
  U as g,
  Ua as be,
  W as a,
  Xa as $,
  Ya as Ge,
  Z as oe,
  Za as Ze,
  _a as Ke,
  a as D,
  aa as fi,
  ab as H,
  b as Le,
  ba as _,
  bb as W,
  c as ri,
  ca as v,
  cb as St,
  d as si,
  db as Ce,
  e as Be,
  eb as we,
  fb as Rt,
  g as je,
  gb as yi,
  ha as F,
  hb as Ee,
  ib as At,
  j as f,
  jb as bi,
  k as ai,
  ka as K,
  kb as Ci,
  la as O,
  lb as kt,
  mb as xt,
  n as Ve,
  na as pi,
  nb as Mt,
  ob as Tt,
  pa as _i,
  pb as se,
  qa as We,
  qb as wi,
  r as bt,
  ra as mi,
  rb as Ei,
  s as li,
  ta as gi,
  u as ci,
  ua as Ye,
  v as ze,
  va as N,
  w as di,
  wb as It,
  x as P,
  y as Ct,
  yb as $e,
  za as T,
} from './chunk-MRH57PYF.js';
var De = class {
    _attachedHost;
    attach(i) {
      return (this._attachedHost = i), i.attach(this);
    }
    detach() {
      let i = this._attachedHost;
      i != null && ((this._attachedHost = null), i.detach());
    }
    get isAttached() {
      return this._attachedHost != null;
    }
    setAttachedHost(i) {
      this._attachedHost = i;
    }
  },
  ae = class extends De {
    component;
    viewContainerRef;
    injector;
    projectableNodes;
    constructor(i, e, t, o) {
      super(),
        (this.component = i),
        (this.viewContainerRef = e),
        (this.injector = t),
        (this.projectableNodes = o);
    }
  },
  le = class extends De {
    templateRef;
    viewContainerRef;
    context;
    injector;
    constructor(i, e, t, o) {
      super(),
        (this.templateRef = i),
        (this.viewContainerRef = e),
        (this.context = t),
        (this.injector = o);
    }
    get origin() {
      return this.templateRef.elementRef;
    }
    attach(i, e = this.context) {
      return (this.context = e), super.attach(i);
    }
    detach() {
      return (this.context = void 0), super.detach();
    }
  },
  Pt = class extends De {
    element;
    constructor(i) {
      super(), (this.element = i instanceof O ? i.nativeElement : i);
    }
  },
  ce = class {
    _attachedPortal;
    _disposeFn;
    _isDisposed = !1;
    hasAttached() {
      return !!this._attachedPortal;
    }
    attach(i) {
      if (i instanceof ae) return (this._attachedPortal = i), this.attachComponentPortal(i);
      if (i instanceof le) return (this._attachedPortal = i), this.attachTemplatePortal(i);
      if (this.attachDomPortal && i instanceof Pt)
        return (this._attachedPortal = i), this.attachDomPortal(i);
    }
    attachDomPortal = null;
    detach() {
      this._attachedPortal &&
        (this._attachedPortal.setAttachedHost(null), (this._attachedPortal = null)),
        this._invokeDisposeFn();
    }
    dispose() {
      this.hasAttached() && this.detach(), this._invokeDisposeFn(), (this._isDisposed = !0);
    }
    setDisposeFn(i) {
      this._disposeFn = i;
    }
    _invokeDisposeFn() {
      this._disposeFn && (this._disposeFn(), (this._disposeFn = null));
    }
  },
  qe = class extends ce {
    outletElement;
    _appRef;
    _defaultInjector;
    constructor(i, e, t) {
      super(), (this.outletElement = i), (this._appRef = e), (this._defaultInjector = t);
    }
    attachComponentPortal(i) {
      let e;
      if (i.viewContainerRef) {
        let t = i.injector || i.viewContainerRef.injector,
          o = t.get(Dt, null, { optional: !0 }) || void 0;
        (e = i.viewContainerRef.createComponent(i.component, {
          index: i.viewContainerRef.length,
          injector: t,
          ngModuleRef: o,
          projectableNodes: i.projectableNodes || void 0,
        })),
          this.setDisposeFn(() => e.destroy());
      } else {
        let t = this._appRef,
          o = i.injector || this._defaultInjector || _.NULL,
          r = o.get(oe, t.injector);
        (e = $e(i.component, {
          elementInjector: o,
          environmentInjector: r,
          projectableNodes: i.projectableNodes || void 0,
        })),
          t.attachView(e.hostView),
          this.setDisposeFn(() => {
            t.viewCount > 0 && t.detachView(e.hostView), e.destroy();
          });
      }
      return (
        this.outletElement.appendChild(this._getComponentRootNode(e)), (this._attachedPortal = i), e
      );
    }
    attachTemplatePortal(i) {
      let e = i.viewContainerRef,
        t = e.createEmbeddedView(i.templateRef, i.context, { injector: i.injector });
      return (
        t.rootNodes.forEach((o) => this.outletElement.appendChild(o)),
        t.detectChanges(),
        this.setDisposeFn(() => {
          let o = e.indexOf(t);
          o !== -1 && e.remove(o);
        }),
        (this._attachedPortal = i),
        t
      );
    }
    attachDomPortal = (i) => {
      let e = i.element;
      e.parentNode;
      let t = this.outletElement.ownerDocument.createComment('dom-portal');
      e.parentNode.insertBefore(t, e),
        this.outletElement.appendChild(e),
        (this._attachedPortal = i),
        super.setDisposeFn(() => {
          t.parentNode && t.parentNode.replaceChild(e, t);
        });
    };
    dispose() {
      super.dispose(), this.outletElement.remove();
    }
    _getComponentRootNode(i) {
      return i.hostView.rootNodes[0];
    }
  };
var Oe = (() => {
  class n extends ce {
    _moduleRef = a(Dt, { optional: !0 });
    _document = a(v);
    _viewContainerRef = a(Ue);
    _isInitialized = !1;
    _attachedRef;
    constructor() {
      super();
    }
    get portal() {
      return this._attachedPortal;
    }
    set portal(e) {
      (this.hasAttached() && !e && !this._isInitialized) ||
        (this.hasAttached() && super.detach(),
        e && super.attach(e),
        (this._attachedPortal = e || null));
    }
    attached = new T();
    get attachedRef() {
      return this._attachedRef;
    }
    ngOnInit() {
      this._isInitialized = !0;
    }
    ngOnDestroy() {
      super.dispose(), (this._attachedRef = this._attachedPortal = null);
    }
    attachComponentPortal(e) {
      e.setAttachedHost(this);
      let t = e.viewContainerRef != null ? e.viewContainerRef : this._viewContainerRef,
        o = t.createComponent(e.component, {
          index: t.length,
          injector: e.injector || t.injector,
          projectableNodes: e.projectableNodes || void 0,
          ngModuleRef: this._moduleRef || void 0,
        });
      return (
        t !== this._viewContainerRef && this._getRootNode().appendChild(o.hostView.rootNodes[0]),
        super.setDisposeFn(() => o.destroy()),
        (this._attachedPortal = e),
        (this._attachedRef = o),
        this.attached.emit(o),
        o
      );
    }
    attachTemplatePortal(e) {
      e.setAttachedHost(this);
      let t = this._viewContainerRef.createEmbeddedView(e.templateRef, e.context, {
        injector: e.injector,
      });
      return (
        super.setDisposeFn(() => this._viewContainerRef.clear()),
        (this._attachedPortal = e),
        (this._attachedRef = t),
        this.attached.emit(t),
        t
      );
    }
    attachDomPortal = (e) => {
      let t = e.element;
      t.parentNode;
      let o = this._document.createComment('dom-portal');
      e.setAttachedHost(this),
        t.parentNode.insertBefore(o, t),
        this._getRootNode().appendChild(t),
        (this._attachedPortal = e),
        super.setDisposeFn(() => {
          o.parentNode && o.parentNode.replaceChild(t, o);
        });
    };
    _getRootNode() {
      let e = this._viewContainerRef.element.nativeElement;
      return e.nodeType === e.ELEMENT_NODE ? e : e.parentNode;
    }
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵdir = A({
      type: n,
      selectors: [['', 'cdkPortalOutlet', '']],
      inputs: { portal: [0, 'cdkPortalOutlet', 'portal'] },
      outputs: { attached: 'attached' },
      exportAs: ['cdkPortalOutlet'],
      features: [z],
    });
  }
  return n;
})();
var q = (() => {
  class n {
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵmod = C({ type: n });
    static ɵinj = y({});
  }
  return n;
})();
function Ri(n) {
  return n.buttons === 0 || n.detail === 0;
}
function Ai(n) {
  let i = (n.touches && n.touches[0]) || (n.changedTouches && n.changedTouches[0]);
  return (
    !!i &&
    i.identifier === -1 &&
    (i.radiusX == null || i.radiusX === 1) &&
    (i.radiusY == null || i.radiusY === 1)
  );
}
var Ft;
function bn() {
  if (Ft == null) {
    let n = typeof document < 'u' ? document.head : null;
    Ft = !!(n && (n.createShadowRoot || n.attachShadow));
  }
  return Ft;
}
function ki(n) {
  if (bn()) {
    let i = n.getRootNode ? n.getRootNode() : null;
    if (typeof ShadowRoot < 'u' && ShadowRoot && i instanceof ShadowRoot) return i;
  }
  return null;
}
function Qe() {
  let n = typeof document < 'u' && document ? document.activeElement : null;
  for (; n && n.shadowRoot; ) {
    let i = n.shadowRoot.activeElement;
    if (i === n) break;
    n = i;
  }
  return n;
}
function B(n) {
  return n.composedPath ? n.composedPath()[0] : n.target;
}
var Nt;
try {
  Nt = typeof Intl < 'u' && Intl.v8BreakIterator;
} catch {
  Nt = !1;
}
var E = (() => {
  class n {
    _platformId = a(_i);
    isBrowser = this._platformId ? Oi(this._platformId) : typeof document == 'object' && !!document;
    EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    BLINK =
      this.isBrowser && !!(window.chrome || Nt) && typeof CSS < 'u' && !this.EDGE && !this.TRIDENT;
    WEBKIT =
      this.isBrowser &&
      /AppleWebKit/i.test(navigator.userAgent) &&
      !this.BLINK &&
      !this.EDGE &&
      !this.TRIDENT;
    IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);
    FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    constructor() {}
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵprov = h({ token: n, factory: n.ɵfac, providedIn: 'root' });
  }
  return n;
})();
var Se;
function Cn() {
  if (Se == null && typeof window < 'u')
    try {
      window.addEventListener(
        'test',
        null,
        Object.defineProperty({}, 'passive', { get: () => (Se = !0) })
      );
    } finally {
      Se = Se || !1;
    }
  return Se;
}
function xi(n) {
  return Cn() ? n : !!n.capture;
}
function Re(n, i = 0) {
  return Mi(n) ? Number(n) : arguments.length === 2 ? i : 0;
}
function Mi(n) {
  return !isNaN(parseFloat(n)) && !isNaN(Number(n));
}
function Q(n) {
  return n instanceof O ? n.nativeElement : n;
}
var wn = new g('cdk-input-modality-detector-options'),
  En = { ignoreKeys: [18, 17, 224, 91, 16] },
  Ti = 650,
  Lt = { passive: !0, capture: !0 },
  Dn = (() => {
    class n {
      _platform = a(E);
      _listenerCleanups;
      modalityDetected;
      modalityChanged;
      get mostRecentModality() {
        return this._modality.value;
      }
      _mostRecentTarget = null;
      _modality = new ai(null);
      _options;
      _lastTouchMs = 0;
      _onKeydown = (e) => {
        this._options?.ignoreKeys?.some((t) => t === e.keyCode) ||
          (this._modality.next('keyboard'), (this._mostRecentTarget = B(e)));
      };
      _onMousedown = (e) => {
        Date.now() - this._lastTouchMs < Ti ||
          (this._modality.next(Ri(e) ? 'keyboard' : 'mouse'), (this._mostRecentTarget = B(e)));
      };
      _onTouchstart = (e) => {
        if (Ai(e)) {
          this._modality.next('keyboard');
          return;
        }
        (this._lastTouchMs = Date.now()),
          this._modality.next('touch'),
          (this._mostRecentTarget = B(e));
      };
      constructor() {
        let e = a(b),
          t = a(v),
          o = a(wn, { optional: !0 });
        if (
          ((this._options = D(D({}, En), o)),
          (this.modalityDetected = this._modality.pipe(He(1))),
          (this.modalityChanged = this.modalityDetected.pipe(wt())),
          this._platform.isBrowser)
        ) {
          let r = a(L).createRenderer(null, null);
          this._listenerCleanups = e.runOutsideAngular(() => [
            r.listen(t, 'keydown', this._onKeydown, Lt),
            r.listen(t, 'mousedown', this._onMousedown, Lt),
            r.listen(t, 'touchstart', this._onTouchstart, Lt),
          ]);
        }
      }
      ngOnDestroy() {
        this._modality.complete(), this._listenerCleanups?.forEach((e) => e());
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = h({ token: n, factory: n.ɵfac, providedIn: 'root' });
    }
    return n;
  })(),
  et = (function (n) {
    return (n[(n.IMMEDIATE = 0)] = 'IMMEDIATE'), (n[(n.EVENTUAL = 1)] = 'EVENTUAL'), n;
  })(et || {}),
  On = new g('cdk-focus-monitor-default-options'),
  Je = xi({ passive: !0, capture: !0 }),
  Ii = (() => {
    class n {
      _ngZone = a(b);
      _platform = a(E);
      _inputModalityDetector = a(Dn);
      _origin = null;
      _lastFocusOrigin;
      _windowFocused = !1;
      _windowFocusTimeoutId;
      _originTimeoutId;
      _originFromTouchInteraction = !1;
      _elementInfo = new Map();
      _monitoredElementCount = 0;
      _rootNodeFocusListenerCount = new Map();
      _detectionMode;
      _windowFocusListener = () => {
        (this._windowFocused = !0),
          (this._windowFocusTimeoutId = setTimeout(() => (this._windowFocused = !1)));
      };
      _document = a(v);
      _stopInputModalityDetector = new f();
      constructor() {
        let e = a(On, { optional: !0 });
        this._detectionMode = e?.detectionMode || et.IMMEDIATE;
      }
      _rootNodeFocusAndBlurListener = (e) => {
        let t = B(e);
        for (let o = t; o; o = o.parentElement)
          e.type === 'focus' ? this._onFocus(e, o) : this._onBlur(e, o);
      };
      monitor(e, t = !1) {
        let o = Q(e);
        if (!this._platform.isBrowser || o.nodeType !== 1) return Ve();
        let r = ki(o) || this._document,
          s = this._elementInfo.get(o);
        if (s) return t && (s.checkChildren = !0), s.subject;
        let l = { checkChildren: t, subject: new f(), rootNode: r };
        return this._elementInfo.set(o, l), this._registerGlobalListeners(l), l.subject;
      }
      stopMonitoring(e) {
        let t = Q(e),
          o = this._elementInfo.get(t);
        o &&
          (o.subject.complete(),
          this._setClasses(t),
          this._elementInfo.delete(t),
          this._removeGlobalListeners(o));
      }
      focusVia(e, t, o) {
        let r = Q(e),
          s = this._document.activeElement;
        r === s
          ? this._getClosestElementsInfo(r).forEach(([l, c]) => this._originChanged(l, t, c))
          : (this._setOrigin(t), typeof r.focus == 'function' && r.focus(o));
      }
      ngOnDestroy() {
        this._elementInfo.forEach((e, t) => this.stopMonitoring(t));
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _getFocusOrigin(e) {
        return this._origin
          ? this._originFromTouchInteraction
            ? this._shouldBeAttributedToTouch(e)
              ? 'touch'
              : 'program'
            : this._origin
          : this._windowFocused && this._lastFocusOrigin
          ? this._lastFocusOrigin
          : e && this._isLastInteractionFromInputLabel(e)
          ? 'mouse'
          : 'program';
      }
      _shouldBeAttributedToTouch(e) {
        return (
          this._detectionMode === et.EVENTUAL ||
          !!e?.contains(this._inputModalityDetector._mostRecentTarget)
        );
      }
      _setClasses(e, t) {
        e.classList.toggle('cdk-focused', !!t),
          e.classList.toggle('cdk-touch-focused', t === 'touch'),
          e.classList.toggle('cdk-keyboard-focused', t === 'keyboard'),
          e.classList.toggle('cdk-mouse-focused', t === 'mouse'),
          e.classList.toggle('cdk-program-focused', t === 'program');
      }
      _setOrigin(e, t = !1) {
        this._ngZone.runOutsideAngular(() => {
          if (
            ((this._origin = e),
            (this._originFromTouchInteraction = e === 'touch' && t),
            this._detectionMode === et.IMMEDIATE)
          ) {
            clearTimeout(this._originTimeoutId);
            let o = this._originFromTouchInteraction ? Ti : 1;
            this._originTimeoutId = setTimeout(() => (this._origin = null), o);
          }
        });
      }
      _onFocus(e, t) {
        let o = this._elementInfo.get(t),
          r = B(e);
        !o || (!o.checkChildren && t !== r) || this._originChanged(t, this._getFocusOrigin(r), o);
      }
      _onBlur(e, t) {
        let o = this._elementInfo.get(t);
        !o ||
          (o.checkChildren && e.relatedTarget instanceof Node && t.contains(e.relatedTarget)) ||
          (this._setClasses(t), this._emitOrigin(o, null));
      }
      _emitOrigin(e, t) {
        e.subject.observers.length && this._ngZone.run(() => e.subject.next(t));
      }
      _registerGlobalListeners(e) {
        if (!this._platform.isBrowser) return;
        let t = e.rootNode,
          o = this._rootNodeFocusListenerCount.get(t) || 0;
        o ||
          this._ngZone.runOutsideAngular(() => {
            t.addEventListener('focus', this._rootNodeFocusAndBlurListener, Je),
              t.addEventListener('blur', this._rootNodeFocusAndBlurListener, Je);
          }),
          this._rootNodeFocusListenerCount.set(t, o + 1),
          ++this._monitoredElementCount === 1 &&
            (this._ngZone.runOutsideAngular(() => {
              this._getWindow().addEventListener('focus', this._windowFocusListener);
            }),
            this._inputModalityDetector.modalityDetected
              .pipe(ve(this._stopInputModalityDetector))
              .subscribe((r) => {
                this._setOrigin(r, !0);
              }));
      }
      _removeGlobalListeners(e) {
        let t = e.rootNode;
        if (this._rootNodeFocusListenerCount.has(t)) {
          let o = this._rootNodeFocusListenerCount.get(t);
          o > 1
            ? this._rootNodeFocusListenerCount.set(t, o - 1)
            : (t.removeEventListener('focus', this._rootNodeFocusAndBlurListener, Je),
              t.removeEventListener('blur', this._rootNodeFocusAndBlurListener, Je),
              this._rootNodeFocusListenerCount.delete(t));
        }
        --this._monitoredElementCount ||
          (this._getWindow().removeEventListener('focus', this._windowFocusListener),
          this._stopInputModalityDetector.next(),
          clearTimeout(this._windowFocusTimeoutId),
          clearTimeout(this._originTimeoutId));
      }
      _originChanged(e, t, o) {
        this._setClasses(e, t), this._emitOrigin(o, t), (this._lastFocusOrigin = t);
      }
      _getClosestElementsInfo(e) {
        let t = [];
        return (
          this._elementInfo.forEach((o, r) => {
            (r === e || (o.checkChildren && r.contains(e))) && t.push([r, o]);
          }),
          t
        );
      }
      _isLastInteractionFromInputLabel(e) {
        let { _mostRecentTarget: t, mostRecentModality: o } = this._inputModalityDetector;
        if (
          o !== 'mouse' ||
          !t ||
          t === e ||
          (e.nodeName !== 'INPUT' && e.nodeName !== 'TEXTAREA') ||
          e.disabled
        )
          return !1;
        let r = e.labels;
        if (r) {
          for (let s = 0; s < r.length; s++) if (r[s].contains(t)) return !0;
        }
        return !1;
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = h({ token: n, factory: n.ɵfac, providedIn: 'root' });
    }
    return n;
  })();
var tt = new WeakMap(),
  Ae = (() => {
    class n {
      _appRef;
      _injector = a(_);
      _environmentInjector = a(oe);
      load(e) {
        let t = (this._appRef = this._appRef || this._injector.get(be)),
          o = tt.get(t);
        o ||
          ((o = { loaders: new Set(), refs: [] }),
          tt.set(t, o),
          t.onDestroy(() => {
            tt.get(t)?.refs.forEach((r) => r.destroy()), tt.delete(t);
          })),
          o.loaders.has(e) ||
            (o.loaders.add(e),
            o.refs.push($e(e, { environmentInjector: this._environmentInjector })));
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = h({ token: n, factory: n.ɵfac, providedIn: 'root' });
    }
    return n;
  })();
var Pi = (() => {
  class n {
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵcmp = R({
      type: n,
      selectors: [['ng-component']],
      exportAs: ['cdkVisuallyHidden'],
      decls: 0,
      vars: 0,
      template: function (t, o) {},
      styles: [
        `.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}
`,
      ],
      encapsulation: 2,
      changeDetection: 0,
    });
  }
  return n;
})();
function de(n) {
  return Array.isArray(n) ? n : [n];
}
var Fi = new Set(),
  J,
  it = (() => {
    class n {
      _platform = a(E);
      _nonce = a(mi, { optional: !0 });
      _matchMedia;
      constructor() {
        this._matchMedia =
          this._platform.isBrowser && window.matchMedia ? window.matchMedia.bind(window) : Rn;
      }
      matchMedia(e) {
        return (
          (this._platform.WEBKIT || this._platform.BLINK) && Sn(e, this._nonce), this._matchMedia(e)
        );
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = h({ token: n, factory: n.ɵfac, providedIn: 'root' });
    }
    return n;
  })();
function Sn(n, i) {
  if (!Fi.has(n))
    try {
      J ||
        ((J = document.createElement('style')),
        i && J.setAttribute('nonce', i),
        J.setAttribute('type', 'text/css'),
        document.head.appendChild(J)),
        J.sheet && (J.sheet.insertRule(`@media ${n} {body{ }}`, 0), Fi.add(n));
    } catch (e) {
      console.error(e);
    }
}
function Rn(n) {
  return {
    matches: n === 'all' || n === '',
    media: n,
    addListener: () => {},
    removeListener: () => {},
  };
}
var Bt = (() => {
  class n {
    _mediaMatcher = a(it);
    _zone = a(b);
    _queries = new Map();
    _destroySubject = new f();
    constructor() {}
    ngOnDestroy() {
      this._destroySubject.next(), this._destroySubject.complete();
    }
    isMatched(e) {
      return Ni(de(e)).some((o) => this._registerQuery(o).mql.matches);
    }
    observe(e) {
      let o = Ni(de(e)).map((s) => this._registerQuery(s).observable),
        r = li(o);
      return (
        (r = ci(r.pipe(j(1)), r.pipe(He(1), hi(0)))),
        r.pipe(
          bt((s) => {
            let l = { matches: !1, breakpoints: {} };
            return (
              s.forEach(({ matches: c, query: u }) => {
                (l.matches = l.matches || c), (l.breakpoints[u] = c);
              }),
              l
            );
          })
        )
      );
    }
    _registerQuery(e) {
      if (this._queries.has(e)) return this._queries.get(e);
      let t = this._mediaMatcher.matchMedia(e),
        r = {
          observable: new je((s) => {
            let l = (c) => this._zone.run(() => s.next(c));
            return (
              t.addListener(l),
              () => {
                t.removeListener(l);
              }
            );
          }).pipe(
            Z(t),
            bt(({ matches: s }) => ({ query: e, matches: s })),
            ve(this._destroySubject)
          ),
          mql: t,
        };
      return this._queries.set(e, r), r;
    }
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵprov = h({ token: n, factory: n.ɵfac, providedIn: 'root' });
  }
  return n;
})();
function Ni(n) {
  return n
    .map((i) => i.split(','))
    .reduce((i, e) => i.concat(e))
    .map((i) => i.trim());
}
var An = (() => {
  class n {
    create(e) {
      return typeof MutationObserver > 'u' ? null : new MutationObserver(e);
    }
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵprov = h({ token: n, factory: n.ɵfac, providedIn: 'root' });
  }
  return n;
})();
var Li = (() => {
  class n {
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵmod = C({ type: n });
    static ɵinj = y({ providers: [An] });
  }
  return n;
})();
var Ht = (() => {
  class n {
    _platform = a(E);
    constructor() {}
    isDisabled(e) {
      return e.hasAttribute('disabled');
    }
    isVisible(e) {
      return xn(e) && getComputedStyle(e).visibility === 'visible';
    }
    isTabbable(e) {
      if (!this._platform.isBrowser) return !1;
      let t = kn(Bn(e));
      if (t && (Bi(t) === -1 || !this.isVisible(t))) return !1;
      let o = e.nodeName.toLowerCase(),
        r = Bi(e);
      return e.hasAttribute('contenteditable')
        ? r !== -1
        : o === 'iframe' ||
          o === 'object' ||
          (this._platform.WEBKIT && this._platform.IOS && !Nn(e))
        ? !1
        : o === 'audio'
        ? e.hasAttribute('controls')
          ? r !== -1
          : !1
        : o === 'video'
        ? r === -1
          ? !1
          : r !== null
          ? !0
          : this._platform.FIREFOX || e.hasAttribute('controls')
        : e.tabIndex >= 0;
    }
    isFocusable(e, t) {
      return Ln(e) && !this.isDisabled(e) && (t?.ignoreVisibility || this.isVisible(e));
    }
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵprov = h({ token: n, factory: n.ɵfac, providedIn: 'root' });
  }
  return n;
})();
function kn(n) {
  try {
    return n.frameElement;
  } catch {
    return null;
  }
}
function xn(n) {
  return !!(
    n.offsetWidth ||
    n.offsetHeight ||
    (typeof n.getClientRects == 'function' && n.getClientRects().length)
  );
}
function Mn(n) {
  let i = n.nodeName.toLowerCase();
  return i === 'input' || i === 'select' || i === 'button' || i === 'textarea';
}
function Tn(n) {
  return Pn(n) && n.type == 'hidden';
}
function In(n) {
  return Fn(n) && n.hasAttribute('href');
}
function Pn(n) {
  return n.nodeName.toLowerCase() == 'input';
}
function Fn(n) {
  return n.nodeName.toLowerCase() == 'a';
}
function Hi(n) {
  if (!n.hasAttribute('tabindex') || n.tabIndex === void 0) return !1;
  let i = n.getAttribute('tabindex');
  return !!(i && !isNaN(parseInt(i, 10)));
}
function Bi(n) {
  if (!Hi(n)) return null;
  let i = parseInt(n.getAttribute('tabindex') || '', 10);
  return isNaN(i) ? -1 : i;
}
function Nn(n) {
  let i = n.nodeName.toLowerCase(),
    e = i === 'input' && n.type;
  return e === 'text' || e === 'password' || i === 'select' || i === 'textarea';
}
function Ln(n) {
  return Tn(n) ? !1 : Mn(n) || In(n) || n.hasAttribute('contenteditable') || Hi(n);
}
function Bn(n) {
  return (n.ownerDocument && n.ownerDocument.defaultView) || window;
}
var Vt = class {
    _element;
    _checker;
    _ngZone;
    _document;
    _injector;
    _startAnchor;
    _endAnchor;
    _hasAttached = !1;
    startAnchorListener = () => this.focusLastTabbableElement();
    endAnchorListener = () => this.focusFirstTabbableElement();
    get enabled() {
      return this._enabled;
    }
    set enabled(i) {
      (this._enabled = i),
        this._startAnchor &&
          this._endAnchor &&
          (this._toggleAnchorTabIndex(i, this._startAnchor),
          this._toggleAnchorTabIndex(i, this._endAnchor));
    }
    _enabled = !0;
    constructor(i, e, t, o, r = !1, s) {
      (this._element = i),
        (this._checker = e),
        (this._ngZone = t),
        (this._document = o),
        (this._injector = s),
        r || this.attachAnchors();
    }
    destroy() {
      let i = this._startAnchor,
        e = this._endAnchor;
      i && (i.removeEventListener('focus', this.startAnchorListener), i.remove()),
        e && (e.removeEventListener('focus', this.endAnchorListener), e.remove()),
        (this._startAnchor = this._endAnchor = null),
        (this._hasAttached = !1);
    }
    attachAnchors() {
      return this._hasAttached
        ? !0
        : (this._ngZone.runOutsideAngular(() => {
            this._startAnchor ||
              ((this._startAnchor = this._createAnchor()),
              this._startAnchor.addEventListener('focus', this.startAnchorListener)),
              this._endAnchor ||
                ((this._endAnchor = this._createAnchor()),
                this._endAnchor.addEventListener('focus', this.endAnchorListener));
          }),
          this._element.parentNode &&
            (this._element.parentNode.insertBefore(this._startAnchor, this._element),
            this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling),
            (this._hasAttached = !0)),
          this._hasAttached);
    }
    focusInitialElementWhenReady(i) {
      return new Promise((e) => {
        this._executeOnStable(() => e(this.focusInitialElement(i)));
      });
    }
    focusFirstTabbableElementWhenReady(i) {
      return new Promise((e) => {
        this._executeOnStable(() => e(this.focusFirstTabbableElement(i)));
      });
    }
    focusLastTabbableElementWhenReady(i) {
      return new Promise((e) => {
        this._executeOnStable(() => e(this.focusLastTabbableElement(i)));
      });
    }
    _getRegionBoundary(i) {
      let e = this._element.querySelectorAll(
        `[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`
      );
      return i == 'start'
        ? e.length
          ? e[0]
          : this._getFirstTabbableElement(this._element)
        : e.length
        ? e[e.length - 1]
        : this._getLastTabbableElement(this._element);
    }
    focusInitialElement(i) {
      let e = this._element.querySelector('[cdk-focus-initial], [cdkFocusInitial]');
      if (e) {
        if (!this._checker.isFocusable(e)) {
          let t = this._getFirstTabbableElement(e);
          return t?.focus(i), !!t;
        }
        return e.focus(i), !0;
      }
      return this.focusFirstTabbableElement(i);
    }
    focusFirstTabbableElement(i) {
      let e = this._getRegionBoundary('start');
      return e && e.focus(i), !!e;
    }
    focusLastTabbableElement(i) {
      let e = this._getRegionBoundary('end');
      return e && e.focus(i), !!e;
    }
    hasAttached() {
      return this._hasAttached;
    }
    _getFirstTabbableElement(i) {
      if (this._checker.isFocusable(i) && this._checker.isTabbable(i)) return i;
      let e = i.children;
      for (let t = 0; t < e.length; t++) {
        let o =
          e[t].nodeType === this._document.ELEMENT_NODE
            ? this._getFirstTabbableElement(e[t])
            : null;
        if (o) return o;
      }
      return null;
    }
    _getLastTabbableElement(i) {
      if (this._checker.isFocusable(i) && this._checker.isTabbable(i)) return i;
      let e = i.children;
      for (let t = e.length - 1; t >= 0; t--) {
        let o =
          e[t].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(e[t]) : null;
        if (o) return o;
      }
      return null;
    }
    _createAnchor() {
      let i = this._document.createElement('div');
      return (
        this._toggleAnchorTabIndex(this._enabled, i),
        i.classList.add('cdk-visually-hidden'),
        i.classList.add('cdk-focus-trap-anchor'),
        i.setAttribute('aria-hidden', 'true'),
        i
      );
    }
    _toggleAnchorTabIndex(i, e) {
      i ? e.setAttribute('tabindex', '0') : e.removeAttribute('tabindex');
    }
    toggleAnchors(i) {
      this._startAnchor &&
        this._endAnchor &&
        (this._toggleAnchorTabIndex(i, this._startAnchor),
        this._toggleAnchorTabIndex(i, this._endAnchor));
    }
    _executeOnStable(i) {
      this._injector ? V(i, { injector: this._injector }) : setTimeout(i);
    }
  },
  Wt = (() => {
    class n {
      _checker = a(Ht);
      _ngZone = a(b);
      _document = a(v);
      _injector = a(_);
      constructor() {
        a(Ae).load(Pi);
      }
      create(e, t = !1) {
        return new Vt(e, this._checker, this._ngZone, this._document, t, this._injector);
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = h({ token: n, factory: n.ɵfac, providedIn: 'root' });
    }
    return n;
  })();
var Y = (function (n) {
    return (
      (n[(n.NONE = 0)] = 'NONE'),
      (n[(n.BLACK_ON_WHITE = 1)] = 'BLACK_ON_WHITE'),
      (n[(n.WHITE_ON_BLACK = 2)] = 'WHITE_ON_BLACK'),
      n
    );
  })(Y || {}),
  ji = 'cdk-high-contrast-black-on-white',
  Vi = 'cdk-high-contrast-white-on-black',
  jt = 'cdk-high-contrast-active',
  nt = (() => {
    class n {
      _platform = a(E);
      _hasCheckedHighContrastMode;
      _document = a(v);
      _breakpointSubscription;
      constructor() {
        this._breakpointSubscription = a(Bt)
          .observe('(forced-colors: active)')
          .subscribe(() => {
            this._hasCheckedHighContrastMode &&
              ((this._hasCheckedHighContrastMode = !1),
              this._applyBodyHighContrastModeCssClasses());
          });
      }
      getHighContrastMode() {
        if (!this._platform.isBrowser) return Y.NONE;
        let e = this._document.createElement('div');
        (e.style.backgroundColor = 'rgb(1,2,3)'),
          (e.style.position = 'absolute'),
          this._document.body.appendChild(e);
        let t = this._document.defaultView || window,
          o = t && t.getComputedStyle ? t.getComputedStyle(e) : null,
          r = ((o && o.backgroundColor) || '').replace(/ /g, '');
        switch ((e.remove(), r)) {
          case 'rgb(0,0,0)':
          case 'rgb(45,50,54)':
          case 'rgb(32,32,32)':
            return Y.WHITE_ON_BLACK;
          case 'rgb(255,255,255)':
          case 'rgb(255,250,239)':
            return Y.BLACK_ON_WHITE;
        }
        return Y.NONE;
      }
      ngOnDestroy() {
        this._breakpointSubscription.unsubscribe();
      }
      _applyBodyHighContrastModeCssClasses() {
        if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
          let e = this._document.body.classList;
          e.remove(jt, ji, Vi), (this._hasCheckedHighContrastMode = !0);
          let t = this.getHighContrastMode();
          t === Y.BLACK_ON_WHITE ? e.add(jt, ji) : t === Y.WHITE_ON_BLACK && e.add(jt, Vi);
        }
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = h({ token: n, factory: n.ɵfac, providedIn: 'root' });
    }
    return n;
  })(),
  Yt = (() => {
    class n {
      constructor() {
        a(nt)._applyBodyHighContrastModeCssClasses();
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵmod = C({ type: n });
      static ɵinj = y({ imports: [Li] });
    }
    return n;
  })();
function ot(n, ...i) {
  return i.length ? i.some((e) => n[e]) : n.altKey || n.shiftKey || n.ctrlKey || n.metaKey;
}
function Ut() {
  return (
    (typeof __karma__ < 'u' && !!__karma__) ||
    (typeof jasmine < 'u' && !!jasmine) ||
    (typeof jest < 'u' && !!jest) ||
    (typeof Mocha < 'u' && !!Mocha)
  );
}
function m(n) {
  return n == null ? '' : typeof n == 'string' ? n : `${n}px`;
}
var jn = new g('cdk-dir-doc', { providedIn: 'root', factory: Vn });
function Vn() {
  return a(v);
}
var zn =
  /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function Hn(n) {
  let i = n?.toLowerCase() || '';
  return i === 'auto' && typeof navigator < 'u' && navigator?.language
    ? zn.test(navigator.language)
      ? 'rtl'
      : 'ltr'
    : i === 'rtl'
    ? 'rtl'
    : 'ltr';
}
var ee = (() => {
  class n {
    get value() {
      return this.valueSignal();
    }
    valueSignal = F('ltr');
    change = new T();
    constructor() {
      let e = a(jn, { optional: !0 });
      if (e) {
        let t = e.body ? e.body.dir : null,
          o = e.documentElement ? e.documentElement.dir : null;
        this.valueSignal.set(Hn(t || o || 'ltr'));
      }
    }
    ngOnDestroy() {
      this.change.complete();
    }
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵprov = h({ token: n, factory: n.ɵfac, providedIn: 'root' });
  }
  return n;
})();
var x = (function (n) {
    return (
      (n[(n.NORMAL = 0)] = 'NORMAL'),
      (n[(n.NEGATED = 1)] = 'NEGATED'),
      (n[(n.INVERTED = 2)] = 'INVERTED'),
      n
    );
  })(x || {}),
  rt,
  te;
function st() {
  if (te == null) {
    if (typeof document != 'object' || !document || typeof Element != 'function' || !Element)
      return (te = !1), te;
    if (document.documentElement?.style && 'scrollBehavior' in document.documentElement.style)
      te = !0;
    else {
      let n = Element.prototype.scrollTo;
      n ? (te = !/\{\s*\[native code\]\s*\}/.test(n.toString())) : (te = !1);
    }
  }
  return te;
}
function he() {
  if (typeof document != 'object' || !document) return x.NORMAL;
  if (rt == null) {
    let n = document.createElement('div'),
      i = n.style;
    (n.dir = 'rtl'),
      (i.width = '1px'),
      (i.overflow = 'auto'),
      (i.visibility = 'hidden'),
      (i.pointerEvents = 'none'),
      (i.position = 'absolute');
    let e = document.createElement('div'),
      t = e.style;
    (t.width = '2px'),
      (t.height = '1px'),
      n.appendChild(e),
      document.body.appendChild(n),
      (rt = x.NORMAL),
      n.scrollLeft === 0 &&
        ((n.scrollLeft = 1), (rt = n.scrollLeft === 0 ? x.NEGATED : x.INVERTED)),
      n.remove();
  }
  return rt;
}
var U = (() => {
  class n {
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵmod = C({ type: n });
    static ɵinj = y({});
  }
  return n;
})();
var Wn = 20,
  at = (() => {
    class n {
      _ngZone = a(b);
      _platform = a(E);
      _renderer = a(L).createRenderer(null, null);
      _cleanupGlobalListener;
      constructor() {}
      _scrolled = new f();
      _scrolledCount = 0;
      scrollContainers = new Map();
      register(e) {
        this.scrollContainers.has(e) ||
          this.scrollContainers.set(
            e,
            e.elementScrolled().subscribe(() => this._scrolled.next(e))
          );
      }
      deregister(e) {
        let t = this.scrollContainers.get(e);
        t && (t.unsubscribe(), this.scrollContainers.delete(e));
      }
      scrolled(e = Wn) {
        return this._platform.isBrowser
          ? new je((t) => {
              this._cleanupGlobalListener ||
                (this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() =>
                  this._renderer.listen('document', 'scroll', () => this._scrolled.next())
                ));
              let o = e > 0 ? this._scrolled.pipe(Ct(e)).subscribe(t) : this._scrolled.subscribe(t);
              return (
                this._scrolledCount++,
                () => {
                  o.unsubscribe(),
                    this._scrolledCount--,
                    this._scrolledCount ||
                      (this._cleanupGlobalListener?.(), (this._cleanupGlobalListener = void 0));
                }
              );
            })
          : Ve();
      }
      ngOnDestroy() {
        this._cleanupGlobalListener?.(),
          (this._cleanupGlobalListener = void 0),
          this.scrollContainers.forEach((e, t) => this.deregister(t)),
          this._scrolled.complete();
      }
      ancestorScrolled(e, t) {
        let o = this.getAncestorScrollContainers(e);
        return this.scrolled(t).pipe(P((r) => !r || o.indexOf(r) > -1));
      }
      getAncestorScrollContainers(e) {
        let t = [];
        return (
          this.scrollContainers.forEach((o, r) => {
            this._scrollableContainsElement(r, e) && t.push(r);
          }),
          t
        );
      }
      _scrollableContainsElement(e, t) {
        let o = Q(t),
          r = e.getElementRef().nativeElement;
        do if (o == r) return !0;
        while ((o = o.parentElement));
        return !1;
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = h({ token: n, factory: n.ɵfac, providedIn: 'root' });
    }
    return n;
  })(),
  Yi = (() => {
    class n {
      elementRef = a(O);
      scrollDispatcher = a(at);
      ngZone = a(b);
      dir = a(ee, { optional: !0 });
      _scrollElement = this.elementRef.nativeElement;
      _destroyed = new f();
      _renderer = a(re);
      _cleanupScroll;
      _elementScrolled = new f();
      constructor() {}
      ngOnInit() {
        (this._cleanupScroll = this.ngZone.runOutsideAngular(() =>
          this._renderer.listen(this._scrollElement, 'scroll', (e) => this._elementScrolled.next(e))
        )),
          this.scrollDispatcher.register(this);
      }
      ngOnDestroy() {
        this._cleanupScroll?.(),
          this._elementScrolled.complete(),
          this.scrollDispatcher.deregister(this),
          this._destroyed.next(),
          this._destroyed.complete();
      }
      elementScrolled() {
        return this._elementScrolled;
      }
      getElementRef() {
        return this.elementRef;
      }
      scrollTo(e) {
        let t = this.elementRef.nativeElement,
          o = this.dir && this.dir.value == 'rtl';
        e.left == null && (e.left = o ? e.end : e.start),
          e.right == null && (e.right = o ? e.start : e.end),
          e.bottom != null && (e.top = t.scrollHeight - t.clientHeight - e.bottom),
          o && he() != x.NORMAL
            ? (e.left != null && (e.right = t.scrollWidth - t.clientWidth - e.left),
              he() == x.INVERTED
                ? (e.left = e.right)
                : he() == x.NEGATED && (e.left = e.right ? -e.right : e.right))
            : e.right != null && (e.left = t.scrollWidth - t.clientWidth - e.right),
          this._applyScrollToOptions(e);
      }
      _applyScrollToOptions(e) {
        let t = this.elementRef.nativeElement;
        st()
          ? t.scrollTo(e)
          : (e.top != null && (t.scrollTop = e.top), e.left != null && (t.scrollLeft = e.left));
      }
      measureScrollOffset(e) {
        let t = 'left',
          o = 'right',
          r = this.elementRef.nativeElement;
        if (e == 'top') return r.scrollTop;
        if (e == 'bottom') return r.scrollHeight - r.clientHeight - r.scrollTop;
        let s = this.dir && this.dir.value == 'rtl';
        return (
          e == 'start' ? (e = s ? o : t) : e == 'end' && (e = s ? t : o),
          s && he() == x.INVERTED
            ? e == t
              ? r.scrollWidth - r.clientWidth - r.scrollLeft
              : r.scrollLeft
            : s && he() == x.NEGATED
            ? e == t
              ? r.scrollLeft + r.scrollWidth - r.clientWidth
              : -r.scrollLeft
            : e == t
            ? r.scrollLeft
            : r.scrollWidth - r.clientWidth - r.scrollLeft
        );
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵdir = A({
        type: n,
        selectors: [
          ['', 'cdk-scrollable', ''],
          ['', 'cdkScrollable', ''],
        ],
      });
    }
    return n;
  })(),
  Yn = 20,
  ke = (() => {
    class n {
      _platform = a(E);
      _listeners;
      _viewportSize;
      _change = new f();
      _document = a(v);
      constructor() {
        let e = a(b),
          t = a(L).createRenderer(null, null);
        e.runOutsideAngular(() => {
          if (this._platform.isBrowser) {
            let o = (r) => this._change.next(r);
            this._listeners = [
              t.listen('window', 'resize', o),
              t.listen('window', 'orientationchange', o),
            ];
          }
          this.change().subscribe(() => (this._viewportSize = null));
        });
      }
      ngOnDestroy() {
        this._listeners?.forEach((e) => e()), this._change.complete();
      }
      getViewportSize() {
        this._viewportSize || this._updateViewportSize();
        let e = { width: this._viewportSize.width, height: this._viewportSize.height };
        return this._platform.isBrowser || (this._viewportSize = null), e;
      }
      getViewportRect() {
        let e = this.getViewportScrollPosition(),
          { width: t, height: o } = this.getViewportSize();
        return {
          top: e.top,
          left: e.left,
          bottom: e.top + o,
          right: e.left + t,
          height: o,
          width: t,
        };
      }
      getViewportScrollPosition() {
        if (!this._platform.isBrowser) return { top: 0, left: 0 };
        let e = this._document,
          t = this._getWindow(),
          o = e.documentElement,
          r = o.getBoundingClientRect(),
          s = -r.top || e.body.scrollTop || t.scrollY || o.scrollTop || 0,
          l = -r.left || e.body.scrollLeft || t.scrollX || o.scrollLeft || 0;
        return { top: s, left: l };
      }
      change(e = Yn) {
        return e > 0 ? this._change.pipe(Ct(e)) : this._change;
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _updateViewportSize() {
        let e = this._getWindow();
        this._viewportSize = this._platform.isBrowser
          ? { width: e.innerWidth, height: e.innerHeight }
          : { width: 0, height: 0 };
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = h({ token: n, factory: n.ɵfac, providedIn: 'root' });
    }
    return n;
  })();
var Wi = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵmod = C({ type: n });
      static ɵinj = y({});
    }
    return n;
  })(),
  Xt = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵmod = C({ type: n });
      static ɵinj = y({ imports: [U, Wi, U, Wi] });
    }
    return n;
  })();
var Gt = {},
  X = (() => {
    class n {
      _appId = a(pi);
      getId(e) {
        return (
          this._appId !== 'ng' && (e += this._appId),
          Gt.hasOwnProperty(e) || (Gt[e] = 0),
          `${e}${Gt[e]++}`
        );
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = h({ token: n, factory: n.ɵfac, providedIn: 'root' });
    }
    return n;
  })();
var Ui = st();
function pe(n) {
  return new lt(n.get(ke), n.get(v));
}
var lt = class {
  _viewportRuler;
  _previousHTMLStyles = { top: '', left: '' };
  _previousScrollPosition;
  _isEnabled = !1;
  _document;
  constructor(i, e) {
    (this._viewportRuler = i), (this._document = e);
  }
  attach() {}
  enable() {
    if (this._canBeEnabled()) {
      let i = this._document.documentElement;
      (this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition()),
        (this._previousHTMLStyles.left = i.style.left || ''),
        (this._previousHTMLStyles.top = i.style.top || ''),
        (i.style.left = m(-this._previousScrollPosition.left)),
        (i.style.top = m(-this._previousScrollPosition.top)),
        i.classList.add('cdk-global-scrollblock'),
        (this._isEnabled = !0);
    }
  }
  disable() {
    if (this._isEnabled) {
      let i = this._document.documentElement,
        e = this._document.body,
        t = i.style,
        o = e.style,
        r = t.scrollBehavior || '',
        s = o.scrollBehavior || '';
      (this._isEnabled = !1),
        (t.left = this._previousHTMLStyles.left),
        (t.top = this._previousHTMLStyles.top),
        i.classList.remove('cdk-global-scrollblock'),
        Ui && (t.scrollBehavior = o.scrollBehavior = 'auto'),
        window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top),
        Ui && ((t.scrollBehavior = r), (o.scrollBehavior = s));
    }
  }
  _canBeEnabled() {
    if (
      this._document.documentElement.classList.contains('cdk-global-scrollblock') ||
      this._isEnabled
    )
      return !1;
    let e = this._document.documentElement,
      t = this._viewportRuler.getViewportSize();
    return e.scrollHeight > t.height || e.scrollWidth > t.width;
  }
};
function Qi(n, i) {
  return new ct(n.get(at), n.get(b), n.get(ke), i);
}
var ct = class {
  _scrollDispatcher;
  _ngZone;
  _viewportRuler;
  _config;
  _scrollSubscription = null;
  _overlayRef;
  _initialScrollPosition;
  constructor(i, e, t, o) {
    (this._scrollDispatcher = i), (this._ngZone = e), (this._viewportRuler = t), (this._config = o);
  }
  attach(i) {
    this._overlayRef, (this._overlayRef = i);
  }
  enable() {
    if (this._scrollSubscription) return;
    let i = this._scrollDispatcher
      .scrolled(0)
      .pipe(
        P((e) => !e || !this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement))
      );
    this._config && this._config.threshold && this._config.threshold > 1
      ? ((this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top),
        (this._scrollSubscription = i.subscribe(() => {
          let e = this._viewportRuler.getViewportScrollPosition().top;
          Math.abs(e - this._initialScrollPosition) > this._config.threshold
            ? this._detach()
            : this._overlayRef.updatePosition();
        })))
      : (this._scrollSubscription = i.subscribe(this._detach));
  }
  disable() {
    this._scrollSubscription &&
      (this._scrollSubscription.unsubscribe(), (this._scrollSubscription = null));
  }
  detach() {
    this.disable(), (this._overlayRef = null);
  }
  _detach = () => {
    this.disable(),
      this._overlayRef.hasAttached() && this._ngZone.run(() => this._overlayRef.detach());
  };
};
var xe = class {
  enable() {}
  disable() {}
  attach() {}
};
function Zt(n, i) {
  return i.some((e) => {
    let t = n.bottom < e.top,
      o = n.top > e.bottom,
      r = n.right < e.left,
      s = n.left > e.right;
    return t || o || r || s;
  });
}
function Xi(n, i) {
  return i.some((e) => {
    let t = n.top < e.top,
      o = n.bottom > e.bottom,
      r = n.left < e.left,
      s = n.right > e.right;
    return t || o || r || s;
  });
}
function pt(n, i) {
  return new dt(n.get(at), n.get(ke), n.get(b), i);
}
var dt = class {
    _scrollDispatcher;
    _viewportRuler;
    _ngZone;
    _config;
    _scrollSubscription = null;
    _overlayRef;
    constructor(i, e, t, o) {
      (this._scrollDispatcher = i),
        (this._viewportRuler = e),
        (this._ngZone = t),
        (this._config = o);
    }
    attach(i) {
      this._overlayRef, (this._overlayRef = i);
    }
    enable() {
      if (!this._scrollSubscription) {
        let i = this._config ? this._config.scrollThrottle : 0;
        this._scrollSubscription = this._scrollDispatcher.scrolled(i).subscribe(() => {
          if ((this._overlayRef.updatePosition(), this._config && this._config.autoClose)) {
            let e = this._overlayRef.overlayElement.getBoundingClientRect(),
              { width: t, height: o } = this._viewportRuler.getViewportSize();
            Zt(e, [{ width: t, height: o, bottom: o, right: t, top: 0, left: 0 }]) &&
              (this.disable(), this._ngZone.run(() => this._overlayRef.detach()));
          }
        });
      }
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(), (this._scrollSubscription = null));
    }
    detach() {
      this.disable(), (this._overlayRef = null);
    }
  },
  Ji = (() => {
    class n {
      _injector = a(_);
      constructor() {}
      noop = () => new xe();
      close = (e) => Qi(this._injector, e);
      block = () => pe(this._injector);
      reposition = (e) => pt(this._injector, e);
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = h({ token: n, factory: n.ɵfac, providedIn: 'root' });
    }
    return n;
  })(),
  ue = class {
    positionStrategy;
    scrollStrategy = new xe();
    panelClass = '';
    hasBackdrop = !1;
    backdropClass = 'cdk-overlay-dark-backdrop';
    disableAnimations;
    width;
    height;
    minWidth;
    minHeight;
    maxWidth;
    maxHeight;
    direction;
    disposeOnNavigation = !1;
    constructor(i) {
      if (i) {
        let e = Object.keys(i);
        for (let t of e) i[t] !== void 0 && (this[t] = i[t]);
      }
    }
  };
var ht = class {
  connectionPair;
  scrollableViewProperties;
  constructor(i, e) {
    (this.connectionPair = i), (this.scrollableViewProperties = e);
  }
};
var en = (() => {
    class n {
      _attachedOverlays = [];
      _document = a(v);
      _isAttached;
      constructor() {}
      ngOnDestroy() {
        this.detach();
      }
      add(e) {
        this.remove(e), this._attachedOverlays.push(e);
      }
      remove(e) {
        let t = this._attachedOverlays.indexOf(e);
        t > -1 && this._attachedOverlays.splice(t, 1),
          this._attachedOverlays.length === 0 && this.detach();
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = h({ token: n, factory: n.ɵfac, providedIn: 'root' });
    }
    return n;
  })(),
  tn = (() => {
    class n extends en {
      _ngZone = a(b);
      _renderer = a(L).createRenderer(null, null);
      _cleanupKeydown;
      add(e) {
        super.add(e),
          this._isAttached ||
            (this._ngZone.runOutsideAngular(() => {
              this._cleanupKeydown = this._renderer.listen(
                'body',
                'keydown',
                this._keydownListener
              );
            }),
            (this._isAttached = !0));
      }
      detach() {
        this._isAttached && (this._cleanupKeydown?.(), (this._isAttached = !1));
      }
      _keydownListener = (e) => {
        let t = this._attachedOverlays;
        for (let o = t.length - 1; o > -1; o--)
          if (t[o]._keydownEvents.observers.length > 0) {
            this._ngZone.run(() => t[o]._keydownEvents.next(e));
            break;
          }
      };
      static ɵfac = (() => {
        let e;
        return function (o) {
          return (e || (e = K(n)))(o || n);
        };
      })();
      static ɵprov = h({ token: n, factory: n.ɵfac, providedIn: 'root' });
    }
    return n;
  })(),
  nn = (() => {
    class n extends en {
      _platform = a(E);
      _ngZone = a(b);
      _renderer = a(L).createRenderer(null, null);
      _cursorOriginalValue;
      _cursorStyleIsSet = !1;
      _pointerDownEventTarget;
      _cleanups;
      add(e) {
        if ((super.add(e), !this._isAttached)) {
          let t = this._document.body,
            o = { capture: !0 },
            r = this._renderer;
          (this._cleanups = this._ngZone.runOutsideAngular(() => [
            r.listen(t, 'pointerdown', this._pointerDownListener, o),
            r.listen(t, 'click', this._clickListener, o),
            r.listen(t, 'auxclick', this._clickListener, o),
            r.listen(t, 'contextmenu', this._clickListener, o),
          ])),
            this._platform.IOS &&
              !this._cursorStyleIsSet &&
              ((this._cursorOriginalValue = t.style.cursor),
              (t.style.cursor = 'pointer'),
              (this._cursorStyleIsSet = !0)),
            (this._isAttached = !0);
        }
      }
      detach() {
        this._isAttached &&
          (this._cleanups?.forEach((e) => e()),
          (this._cleanups = void 0),
          this._platform.IOS &&
            this._cursorStyleIsSet &&
            ((this._document.body.style.cursor = this._cursorOriginalValue),
            (this._cursorStyleIsSet = !1)),
          (this._isAttached = !1));
      }
      _pointerDownListener = (e) => {
        this._pointerDownEventTarget = B(e);
      };
      _clickListener = (e) => {
        let t = B(e),
          o = e.type === 'click' && this._pointerDownEventTarget ? this._pointerDownEventTarget : t;
        this._pointerDownEventTarget = null;
        let r = this._attachedOverlays.slice();
        for (let s = r.length - 1; s > -1; s--) {
          let l = r[s];
          if (l._outsidePointerEvents.observers.length < 1 || !l.hasAttached()) continue;
          if (Gi(l.overlayElement, t) || Gi(l.overlayElement, o)) break;
          let c = l._outsidePointerEvents;
          this._ngZone ? this._ngZone.run(() => c.next(e)) : c.next(e);
        }
      };
      static ɵfac = (() => {
        let e;
        return function (o) {
          return (e || (e = K(n)))(o || n);
        };
      })();
      static ɵprov = h({ token: n, factory: n.ɵfac, providedIn: 'root' });
    }
    return n;
  })();
function Gi(n, i) {
  let e = typeof ShadowRoot < 'u' && ShadowRoot,
    t = i;
  for (; t; ) {
    if (t === n) return !0;
    t = e && t instanceof ShadowRoot ? t.host : t.parentNode;
  }
  return !1;
}
var on = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵcmp = R({
        type: n,
        selectors: [['ng-component']],
        hostAttrs: ['cdk-overlay-style-loader', ''],
        decls: 0,
        vars: 0,
        template: function (t, o) {},
        styles: [
          `.cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed}@layer cdk-overlay{.cdk-overlay-container{z-index:1000}}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute}@layer cdk-overlay{.cdk-global-overlay-wrapper{z-index:1000}}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;display:flex;max-width:100%;max-height:100%}@layer cdk-overlay{.cdk-overlay-pane{z-index:1000}}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);opacity:0;touch-action:manipulation}@layer cdk-overlay{.cdk-overlay-backdrop{z-index:1000;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}}@media(prefers-reduced-motion){.cdk-overlay-backdrop{transition-duration:1ms}}.cdk-overlay-backdrop-showing{opacity:1}@media(forced-colors: active){.cdk-overlay-backdrop-showing{opacity:.6}}@layer cdk-overlay{.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing,.cdk-high-contrast-active .cdk-overlay-transparent-backdrop{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;display:flex;flex-direction:column;min-width:1px;min-height:1px}@layer cdk-overlay{.cdk-overlay-connected-position-bounding-box{z-index:1000}}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}
`,
        ],
        encapsulation: 2,
        changeDetection: 0,
      });
    }
    return n;
  })(),
  _t = (() => {
    class n {
      _platform = a(E);
      _containerElement;
      _document = a(v);
      _styleLoader = a(Ae);
      constructor() {}
      ngOnDestroy() {
        this._containerElement?.remove();
      }
      getContainerElement() {
        return (
          this._loadStyles(),
          this._containerElement || this._createContainer(),
          this._containerElement
        );
      }
      _createContainer() {
        let e = 'cdk-overlay-container';
        if (this._platform.isBrowser || Ut()) {
          let o = this._document.querySelectorAll(
            `.${e}[platform="server"], .${e}[platform="test"]`
          );
          for (let r = 0; r < o.length; r++) o[r].remove();
        }
        let t = this._document.createElement('div');
        t.classList.add(e),
          Ut()
            ? t.setAttribute('platform', 'test')
            : this._platform.isBrowser || t.setAttribute('platform', 'server'),
          this._document.body.appendChild(t),
          (this._containerElement = t);
      }
      _loadStyles() {
        this._styleLoader.load(on);
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = h({ token: n, factory: n.ɵfac, providedIn: 'root' });
    }
    return n;
  })(),
  Kt = class {
    _renderer;
    _ngZone;
    element;
    _cleanupClick;
    _cleanupTransitionEnd;
    _fallbackTimeout;
    constructor(i, e, t, o) {
      (this._renderer = e),
        (this._ngZone = t),
        (this.element = i.createElement('div')),
        this.element.classList.add('cdk-overlay-backdrop'),
        (this._cleanupClick = e.listen(this.element, 'click', o));
    }
    detach() {
      this._ngZone.runOutsideAngular(() => {
        let i = this.element;
        clearTimeout(this._fallbackTimeout),
          this._cleanupTransitionEnd?.(),
          (this._cleanupTransitionEnd = this._renderer.listen(i, 'transitionend', this.dispose)),
          (this._fallbackTimeout = setTimeout(this.dispose, 500)),
          (i.style.pointerEvents = 'none'),
          i.classList.remove('cdk-overlay-backdrop-showing');
      });
    }
    dispose = () => {
      clearTimeout(this._fallbackTimeout),
        this._cleanupClick?.(),
        this._cleanupTransitionEnd?.(),
        (this._cleanupClick = this._cleanupTransitionEnd = this._fallbackTimeout = void 0),
        this.element.remove();
    };
  },
  fe = class {
    _portalOutlet;
    _host;
    _pane;
    _config;
    _ngZone;
    _keyboardDispatcher;
    _document;
    _location;
    _outsideClickDispatcher;
    _animationsDisabled;
    _injector;
    _renderer;
    _backdropClick = new f();
    _attachments = new f();
    _detachments = new f();
    _positionStrategy;
    _scrollStrategy;
    _locationChanges = Be.EMPTY;
    _backdropRef = null;
    _detachContentMutationObserver;
    _detachContentAfterRenderRef;
    _previousHostParent;
    _keydownEvents = new f();
    _outsidePointerEvents = new f();
    _afterNextRenderRef;
    constructor(i, e, t, o, r, s, l, c, u, d = !1, p, I) {
      (this._portalOutlet = i),
        (this._host = e),
        (this._pane = t),
        (this._config = o),
        (this._ngZone = r),
        (this._keyboardDispatcher = s),
        (this._document = l),
        (this._location = c),
        (this._outsideClickDispatcher = u),
        (this._animationsDisabled = d),
        (this._injector = p),
        (this._renderer = I),
        o.scrollStrategy &&
          ((this._scrollStrategy = o.scrollStrategy), this._scrollStrategy.attach(this)),
        (this._positionStrategy = o.positionStrategy);
    }
    get overlayElement() {
      return this._pane;
    }
    get backdropElement() {
      return this._backdropRef?.element || null;
    }
    get hostElement() {
      return this._host;
    }
    attach(i) {
      !this._host.parentElement &&
        this._previousHostParent &&
        this._previousHostParent.appendChild(this._host);
      let e = this._portalOutlet.attach(i);
      return (
        this._positionStrategy && this._positionStrategy.attach(this),
        this._updateStackingOrder(),
        this._updateElementSize(),
        this._updateElementDirection(),
        this._scrollStrategy && this._scrollStrategy.enable(),
        this._afterNextRenderRef?.destroy(),
        (this._afterNextRenderRef = V(
          () => {
            this.hasAttached() && this.updatePosition();
          },
          { injector: this._injector }
        )),
        this._togglePointerEvents(!0),
        this._config.hasBackdrop && this._attachBackdrop(),
        this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !0),
        this._attachments.next(),
        this._completeDetachContent(),
        this._keyboardDispatcher.add(this),
        this._config.disposeOnNavigation &&
          (this._locationChanges = this._location.subscribe(() => this.dispose())),
        this._outsideClickDispatcher.add(this),
        typeof e?.onDestroy == 'function' &&
          e.onDestroy(() => {
            this.hasAttached() &&
              this._ngZone.runOutsideAngular(() => Promise.resolve().then(() => this.detach()));
          }),
        e
      );
    }
    detach() {
      if (!this.hasAttached()) return;
      this.detachBackdrop(),
        this._togglePointerEvents(!1),
        this._positionStrategy && this._positionStrategy.detach && this._positionStrategy.detach(),
        this._scrollStrategy && this._scrollStrategy.disable();
      let i = this._portalOutlet.detach();
      return (
        this._detachments.next(),
        this._completeDetachContent(),
        this._keyboardDispatcher.remove(this),
        this._detachContentWhenEmpty(),
        this._locationChanges.unsubscribe(),
        this._outsideClickDispatcher.remove(this),
        i
      );
    }
    dispose() {
      let i = this.hasAttached();
      this._positionStrategy && this._positionStrategy.dispose(),
        this._disposeScrollStrategy(),
        this._backdropRef?.dispose(),
        this._locationChanges.unsubscribe(),
        this._keyboardDispatcher.remove(this),
        this._portalOutlet.dispose(),
        this._attachments.complete(),
        this._backdropClick.complete(),
        this._keydownEvents.complete(),
        this._outsidePointerEvents.complete(),
        this._outsideClickDispatcher.remove(this),
        this._host?.remove(),
        this._afterNextRenderRef?.destroy(),
        (this._previousHostParent = this._pane = this._host = this._backdropRef = null),
        i && this._detachments.next(),
        this._detachments.complete(),
        this._completeDetachContent();
    }
    hasAttached() {
      return this._portalOutlet.hasAttached();
    }
    backdropClick() {
      return this._backdropClick;
    }
    attachments() {
      return this._attachments;
    }
    detachments() {
      return this._detachments;
    }
    keydownEvents() {
      return this._keydownEvents;
    }
    outsidePointerEvents() {
      return this._outsidePointerEvents;
    }
    getConfig() {
      return this._config;
    }
    updatePosition() {
      this._positionStrategy && this._positionStrategy.apply();
    }
    updatePositionStrategy(i) {
      i !== this._positionStrategy &&
        (this._positionStrategy && this._positionStrategy.dispose(),
        (this._positionStrategy = i),
        this.hasAttached() && (i.attach(this), this.updatePosition()));
    }
    updateSize(i) {
      (this._config = D(D({}, this._config), i)), this._updateElementSize();
    }
    setDirection(i) {
      (this._config = Le(D({}, this._config), { direction: i })), this._updateElementDirection();
    }
    addPanelClass(i) {
      this._pane && this._toggleClasses(this._pane, i, !0);
    }
    removePanelClass(i) {
      this._pane && this._toggleClasses(this._pane, i, !1);
    }
    getDirection() {
      let i = this._config.direction;
      return i ? (typeof i == 'string' ? i : i.value) : 'ltr';
    }
    updateScrollStrategy(i) {
      i !== this._scrollStrategy &&
        (this._disposeScrollStrategy(),
        (this._scrollStrategy = i),
        this.hasAttached() && (i.attach(this), i.enable()));
    }
    _updateElementDirection() {
      this._host.setAttribute('dir', this.getDirection());
    }
    _updateElementSize() {
      if (!this._pane) return;
      let i = this._pane.style;
      (i.width = m(this._config.width)),
        (i.height = m(this._config.height)),
        (i.minWidth = m(this._config.minWidth)),
        (i.minHeight = m(this._config.minHeight)),
        (i.maxWidth = m(this._config.maxWidth)),
        (i.maxHeight = m(this._config.maxHeight));
    }
    _togglePointerEvents(i) {
      this._pane.style.pointerEvents = i ? '' : 'none';
    }
    _attachBackdrop() {
      let i = 'cdk-overlay-backdrop-showing';
      this._backdropRef?.dispose(),
        (this._backdropRef = new Kt(this._document, this._renderer, this._ngZone, (e) => {
          this._backdropClick.next(e);
        })),
        this._animationsDisabled &&
          this._backdropRef.element.classList.add('cdk-overlay-backdrop-noop-animation'),
        this._config.backdropClass &&
          this._toggleClasses(this._backdropRef.element, this._config.backdropClass, !0),
        this._host.parentElement.insertBefore(this._backdropRef.element, this._host),
        !this._animationsDisabled && typeof requestAnimationFrame < 'u'
          ? this._ngZone.runOutsideAngular(() => {
              requestAnimationFrame(() => this._backdropRef?.element.classList.add(i));
            })
          : this._backdropRef.element.classList.add(i);
    }
    _updateStackingOrder() {
      this._host.nextSibling && this._host.parentNode.appendChild(this._host);
    }
    detachBackdrop() {
      this._animationsDisabled
        ? (this._backdropRef?.dispose(), (this._backdropRef = null))
        : this._backdropRef?.detach();
    }
    _toggleClasses(i, e, t) {
      let o = de(e || []).filter((r) => !!r);
      o.length && (t ? i.classList.add(...o) : i.classList.remove(...o));
    }
    _detachContentWhenEmpty() {
      let i = !1;
      try {
        this._detachContentAfterRenderRef = V(
          () => {
            (i = !0), this._detachContent();
          },
          { injector: this._injector }
        );
      } catch (e) {
        if (i) throw e;
        this._detachContent();
      }
      globalThis.MutationObserver &&
        this._pane &&
        ((this._detachContentMutationObserver ||= new globalThis.MutationObserver(() => {
          this._detachContent();
        })),
        this._detachContentMutationObserver.observe(this._pane, { childList: !0 }));
    }
    _detachContent() {
      (!this._pane || !this._host || this._pane.children.length === 0) &&
        (this._pane &&
          this._config.panelClass &&
          this._toggleClasses(this._pane, this._config.panelClass, !1),
        this._host &&
          this._host.parentElement &&
          ((this._previousHostParent = this._host.parentElement), this._host.remove()),
        this._completeDetachContent());
    }
    _completeDetachContent() {
      this._detachContentAfterRenderRef?.destroy(),
        (this._detachContentAfterRenderRef = void 0),
        this._detachContentMutationObserver?.disconnect();
    }
    _disposeScrollStrategy() {
      let i = this._scrollStrategy;
      i?.disable(), i?.detach?.();
    }
  },
  Zi = 'cdk-overlay-connected-position-bounding-box',
  Xn = /([A-Za-z%]+)$/;
function rn(n, i) {
  return new ut(i, n.get(ke), n.get(v), n.get(E), n.get(_t));
}
var ut = class {
  _viewportRuler;
  _document;
  _platform;
  _overlayContainer;
  _overlayRef;
  _isInitialRender;
  _lastBoundingBoxSize = { width: 0, height: 0 };
  _isPushed = !1;
  _canPush = !0;
  _growAfterOpen = !1;
  _hasFlexibleDimensions = !0;
  _positionLocked = !1;
  _originRect;
  _overlayRect;
  _viewportRect;
  _containerRect;
  _viewportMargin = 0;
  _scrollables = [];
  _preferredPositions = [];
  _origin;
  _pane;
  _isDisposed;
  _boundingBox;
  _lastPosition;
  _lastScrollVisibility;
  _positionChanges = new f();
  _resizeSubscription = Be.EMPTY;
  _offsetX = 0;
  _offsetY = 0;
  _transformOriginSelector;
  _appliedPanelClasses = [];
  _previousPushAmount;
  positionChanges = this._positionChanges;
  get positions() {
    return this._preferredPositions;
  }
  constructor(i, e, t, o, r) {
    (this._viewportRuler = e),
      (this._document = t),
      (this._platform = o),
      (this._overlayContainer = r),
      this.setOrigin(i);
  }
  attach(i) {
    this._overlayRef && this._overlayRef,
      this._validatePositions(),
      i.hostElement.classList.add(Zi),
      (this._overlayRef = i),
      (this._boundingBox = i.hostElement),
      (this._pane = i.overlayElement),
      (this._isDisposed = !1),
      (this._isInitialRender = !0),
      (this._lastPosition = null),
      this._resizeSubscription.unsubscribe(),
      (this._resizeSubscription = this._viewportRuler.change().subscribe(() => {
        (this._isInitialRender = !0), this.apply();
      }));
  }
  apply() {
    if (this._isDisposed || !this._platform.isBrowser) return;
    if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
      this.reapplyLastPosition();
      return;
    }
    this._clearPanelClasses(),
      this._resetOverlayElementStyles(),
      this._resetBoundingBoxStyles(),
      (this._viewportRect = this._getNarrowedViewportRect()),
      (this._originRect = this._getOriginRect()),
      (this._overlayRect = this._pane.getBoundingClientRect()),
      (this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect());
    let i = this._originRect,
      e = this._overlayRect,
      t = this._viewportRect,
      o = this._containerRect,
      r = [],
      s;
    for (let l of this._preferredPositions) {
      let c = this._getOriginPoint(i, o, l),
        u = this._getOverlayPoint(c, e, l),
        d = this._getOverlayFit(u, e, t, l);
      if (d.isCompletelyWithinViewport) {
        (this._isPushed = !1), this._applyPosition(l, c);
        return;
      }
      if (this._canFitWithFlexibleDimensions(d, u, t)) {
        r.push({
          position: l,
          origin: c,
          overlayRect: e,
          boundingBoxRect: this._calculateBoundingBoxRect(c, l),
        });
        continue;
      }
      (!s || s.overlayFit.visibleArea < d.visibleArea) &&
        (s = { overlayFit: d, overlayPoint: u, originPoint: c, position: l, overlayRect: e });
    }
    if (r.length) {
      let l = null,
        c = -1;
      for (let u of r) {
        let d = u.boundingBoxRect.width * u.boundingBoxRect.height * (u.position.weight || 1);
        d > c && ((c = d), (l = u));
      }
      (this._isPushed = !1), this._applyPosition(l.position, l.origin);
      return;
    }
    if (this._canPush) {
      (this._isPushed = !0), this._applyPosition(s.position, s.originPoint);
      return;
    }
    this._applyPosition(s.position, s.originPoint);
  }
  detach() {
    this._clearPanelClasses(),
      (this._lastPosition = null),
      (this._previousPushAmount = null),
      this._resizeSubscription.unsubscribe();
  }
  dispose() {
    this._isDisposed ||
      (this._boundingBox &&
        ie(this._boundingBox.style, {
          top: '',
          left: '',
          right: '',
          bottom: '',
          height: '',
          width: '',
          alignItems: '',
          justifyContent: '',
        }),
      this._pane && this._resetOverlayElementStyles(),
      this._overlayRef && this._overlayRef.hostElement.classList.remove(Zi),
      this.detach(),
      this._positionChanges.complete(),
      (this._overlayRef = this._boundingBox = null),
      (this._isDisposed = !0));
  }
  reapplyLastPosition() {
    if (this._isDisposed || !this._platform.isBrowser) return;
    let i = this._lastPosition;
    if (i) {
      (this._originRect = this._getOriginRect()),
        (this._overlayRect = this._pane.getBoundingClientRect()),
        (this._viewportRect = this._getNarrowedViewportRect()),
        (this._containerRect = this._overlayContainer
          .getContainerElement()
          .getBoundingClientRect());
      let e = this._getOriginPoint(this._originRect, this._containerRect, i);
      this._applyPosition(i, e);
    } else this.apply();
  }
  withScrollableContainers(i) {
    return (this._scrollables = i), this;
  }
  withPositions(i) {
    return (
      (this._preferredPositions = i),
      i.indexOf(this._lastPosition) === -1 && (this._lastPosition = null),
      this._validatePositions(),
      this
    );
  }
  withViewportMargin(i) {
    return (this._viewportMargin = i), this;
  }
  withFlexibleDimensions(i = !0) {
    return (this._hasFlexibleDimensions = i), this;
  }
  withGrowAfterOpen(i = !0) {
    return (this._growAfterOpen = i), this;
  }
  withPush(i = !0) {
    return (this._canPush = i), this;
  }
  withLockedPosition(i = !0) {
    return (this._positionLocked = i), this;
  }
  setOrigin(i) {
    return (this._origin = i), this;
  }
  withDefaultOffsetX(i) {
    return (this._offsetX = i), this;
  }
  withDefaultOffsetY(i) {
    return (this._offsetY = i), this;
  }
  withTransformOriginOn(i) {
    return (this._transformOriginSelector = i), this;
  }
  _getOriginPoint(i, e, t) {
    let o;
    if (t.originX == 'center') o = i.left + i.width / 2;
    else {
      let s = this._isRtl() ? i.right : i.left,
        l = this._isRtl() ? i.left : i.right;
      o = t.originX == 'start' ? s : l;
    }
    e.left < 0 && (o -= e.left);
    let r;
    return (
      t.originY == 'center'
        ? (r = i.top + i.height / 2)
        : (r = t.originY == 'top' ? i.top : i.bottom),
      e.top < 0 && (r -= e.top),
      { x: o, y: r }
    );
  }
  _getOverlayPoint(i, e, t) {
    let o;
    t.overlayX == 'center'
      ? (o = -e.width / 2)
      : t.overlayX === 'start'
      ? (o = this._isRtl() ? -e.width : 0)
      : (o = this._isRtl() ? 0 : -e.width);
    let r;
    return (
      t.overlayY == 'center' ? (r = -e.height / 2) : (r = t.overlayY == 'top' ? 0 : -e.height),
      { x: i.x + o, y: i.y + r }
    );
  }
  _getOverlayFit(i, e, t, o) {
    let r = $i(e),
      { x: s, y: l } = i,
      c = this._getOffset(o, 'x'),
      u = this._getOffset(o, 'y');
    c && (s += c), u && (l += u);
    let d = 0 - s,
      p = s + r.width - t.width,
      I = 0 - l,
      k = l + r.height - t.height,
      S = this._subtractOverflows(r.width, d, p),
      M = this._subtractOverflows(r.height, I, k),
      oi = S * M;
    return {
      visibleArea: oi,
      isCompletelyWithinViewport: r.width * r.height === oi,
      fitsInViewportVertically: M === r.height,
      fitsInViewportHorizontally: S == r.width,
    };
  }
  _canFitWithFlexibleDimensions(i, e, t) {
    if (this._hasFlexibleDimensions) {
      let o = t.bottom - e.y,
        r = t.right - e.x,
        s = Ki(this._overlayRef.getConfig().minHeight),
        l = Ki(this._overlayRef.getConfig().minWidth),
        c = i.fitsInViewportVertically || (s != null && s <= o),
        u = i.fitsInViewportHorizontally || (l != null && l <= r);
      return c && u;
    }
    return !1;
  }
  _pushOverlayOnScreen(i, e, t) {
    if (this._previousPushAmount && this._positionLocked)
      return { x: i.x + this._previousPushAmount.x, y: i.y + this._previousPushAmount.y };
    let o = $i(e),
      r = this._viewportRect,
      s = Math.max(i.x + o.width - r.width, 0),
      l = Math.max(i.y + o.height - r.height, 0),
      c = Math.max(r.top - t.top - i.y, 0),
      u = Math.max(r.left - t.left - i.x, 0),
      d = 0,
      p = 0;
    return (
      o.width <= r.width
        ? (d = u || -s)
        : (d = i.x < this._viewportMargin ? r.left - t.left - i.x : 0),
      o.height <= r.height
        ? (p = c || -l)
        : (p = i.y < this._viewportMargin ? r.top - t.top - i.y : 0),
      (this._previousPushAmount = { x: d, y: p }),
      { x: i.x + d, y: i.y + p }
    );
  }
  _applyPosition(i, e) {
    if (
      (this._setTransformOrigin(i),
      this._setOverlayElementStyles(e, i),
      this._setBoundingBoxStyles(e, i),
      i.panelClass && this._addPanelClasses(i.panelClass),
      this._positionChanges.observers.length)
    ) {
      let t = this._getScrollVisibility();
      if (
        i !== this._lastPosition ||
        !this._lastScrollVisibility ||
        !Gn(this._lastScrollVisibility, t)
      ) {
        let o = new ht(i, t);
        this._positionChanges.next(o);
      }
      this._lastScrollVisibility = t;
    }
    (this._lastPosition = i), (this._isInitialRender = !1);
  }
  _setTransformOrigin(i) {
    if (!this._transformOriginSelector) return;
    let e = this._boundingBox.querySelectorAll(this._transformOriginSelector),
      t,
      o = i.overlayY;
    i.overlayX === 'center'
      ? (t = 'center')
      : this._isRtl()
      ? (t = i.overlayX === 'start' ? 'right' : 'left')
      : (t = i.overlayX === 'start' ? 'left' : 'right');
    for (let r = 0; r < e.length; r++) e[r].style.transformOrigin = `${t} ${o}`;
  }
  _calculateBoundingBoxRect(i, e) {
    let t = this._viewportRect,
      o = this._isRtl(),
      r,
      s,
      l;
    if (e.overlayY === 'top') (s = i.y), (r = t.height - s + this._viewportMargin);
    else if (e.overlayY === 'bottom')
      (l = t.height - i.y + this._viewportMargin * 2), (r = t.height - l + this._viewportMargin);
    else {
      let k = Math.min(t.bottom - i.y + t.top, i.y),
        S = this._lastBoundingBoxSize.height;
      (r = k * 2),
        (s = i.y - k),
        r > S && !this._isInitialRender && !this._growAfterOpen && (s = i.y - S / 2);
    }
    let c = (e.overlayX === 'start' && !o) || (e.overlayX === 'end' && o),
      u = (e.overlayX === 'end' && !o) || (e.overlayX === 'start' && o),
      d,
      p,
      I;
    if (u) (I = t.width - i.x + this._viewportMargin * 2), (d = i.x - this._viewportMargin);
    else if (c) (p = i.x), (d = t.right - i.x);
    else {
      let k = Math.min(t.right - i.x + t.left, i.x),
        S = this._lastBoundingBoxSize.width;
      (d = k * 2),
        (p = i.x - k),
        d > S && !this._isInitialRender && !this._growAfterOpen && (p = i.x - S / 2);
    }
    return { top: s, left: p, bottom: l, right: I, width: d, height: r };
  }
  _setBoundingBoxStyles(i, e) {
    let t = this._calculateBoundingBoxRect(i, e);
    !this._isInitialRender &&
      !this._growAfterOpen &&
      ((t.height = Math.min(t.height, this._lastBoundingBoxSize.height)),
      (t.width = Math.min(t.width, this._lastBoundingBoxSize.width)));
    let o = {};
    if (this._hasExactPosition())
      (o.top = o.left = '0'),
        (o.bottom = o.right = o.maxHeight = o.maxWidth = ''),
        (o.width = o.height = '100%');
    else {
      let r = this._overlayRef.getConfig().maxHeight,
        s = this._overlayRef.getConfig().maxWidth;
      (o.height = m(t.height)),
        (o.top = m(t.top)),
        (o.bottom = m(t.bottom)),
        (o.width = m(t.width)),
        (o.left = m(t.left)),
        (o.right = m(t.right)),
        e.overlayX === 'center'
          ? (o.alignItems = 'center')
          : (o.alignItems = e.overlayX === 'end' ? 'flex-end' : 'flex-start'),
        e.overlayY === 'center'
          ? (o.justifyContent = 'center')
          : (o.justifyContent = e.overlayY === 'bottom' ? 'flex-end' : 'flex-start'),
        r && (o.maxHeight = m(r)),
        s && (o.maxWidth = m(s));
    }
    (this._lastBoundingBoxSize = t), ie(this._boundingBox.style, o);
  }
  _resetBoundingBoxStyles() {
    ie(this._boundingBox.style, {
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      height: '',
      width: '',
      alignItems: '',
      justifyContent: '',
    });
  }
  _resetOverlayElementStyles() {
    ie(this._pane.style, { top: '', left: '', bottom: '', right: '', position: '', transform: '' });
  }
  _setOverlayElementStyles(i, e) {
    let t = {},
      o = this._hasExactPosition(),
      r = this._hasFlexibleDimensions,
      s = this._overlayRef.getConfig();
    if (o) {
      let d = this._viewportRuler.getViewportScrollPosition();
      ie(t, this._getExactOverlayY(e, i, d)), ie(t, this._getExactOverlayX(e, i, d));
    } else t.position = 'static';
    let l = '',
      c = this._getOffset(e, 'x'),
      u = this._getOffset(e, 'y');
    c && (l += `translateX(${c}px) `),
      u && (l += `translateY(${u}px)`),
      (t.transform = l.trim()),
      s.maxHeight && (o ? (t.maxHeight = m(s.maxHeight)) : r && (t.maxHeight = '')),
      s.maxWidth && (o ? (t.maxWidth = m(s.maxWidth)) : r && (t.maxWidth = '')),
      ie(this._pane.style, t);
  }
  _getExactOverlayY(i, e, t) {
    let o = { top: '', bottom: '' },
      r = this._getOverlayPoint(e, this._overlayRect, i);
    if (
      (this._isPushed && (r = this._pushOverlayOnScreen(r, this._overlayRect, t)),
      i.overlayY === 'bottom')
    ) {
      let s = this._document.documentElement.clientHeight;
      o.bottom = `${s - (r.y + this._overlayRect.height)}px`;
    } else o.top = m(r.y);
    return o;
  }
  _getExactOverlayX(i, e, t) {
    let o = { left: '', right: '' },
      r = this._getOverlayPoint(e, this._overlayRect, i);
    this._isPushed && (r = this._pushOverlayOnScreen(r, this._overlayRect, t));
    let s;
    if (
      (this._isRtl()
        ? (s = i.overlayX === 'end' ? 'left' : 'right')
        : (s = i.overlayX === 'end' ? 'right' : 'left'),
      s === 'right')
    ) {
      let l = this._document.documentElement.clientWidth;
      o.right = `${l - (r.x + this._overlayRect.width)}px`;
    } else o.left = m(r.x);
    return o;
  }
  _getScrollVisibility() {
    let i = this._getOriginRect(),
      e = this._pane.getBoundingClientRect(),
      t = this._scrollables.map((o) => o.getElementRef().nativeElement.getBoundingClientRect());
    return {
      isOriginClipped: Xi(i, t),
      isOriginOutsideView: Zt(i, t),
      isOverlayClipped: Xi(e, t),
      isOverlayOutsideView: Zt(e, t),
    };
  }
  _subtractOverflows(i, ...e) {
    return e.reduce((t, o) => t - Math.max(o, 0), i);
  }
  _getNarrowedViewportRect() {
    let i = this._document.documentElement.clientWidth,
      e = this._document.documentElement.clientHeight,
      t = this._viewportRuler.getViewportScrollPosition();
    return {
      top: t.top + this._viewportMargin,
      left: t.left + this._viewportMargin,
      right: t.left + i - this._viewportMargin,
      bottom: t.top + e - this._viewportMargin,
      width: i - 2 * this._viewportMargin,
      height: e - 2 * this._viewportMargin,
    };
  }
  _isRtl() {
    return this._overlayRef.getDirection() === 'rtl';
  }
  _hasExactPosition() {
    return !this._hasFlexibleDimensions || this._isPushed;
  }
  _getOffset(i, e) {
    return e === 'x'
      ? i.offsetX == null
        ? this._offsetX
        : i.offsetX
      : i.offsetY == null
      ? this._offsetY
      : i.offsetY;
  }
  _validatePositions() {}
  _addPanelClasses(i) {
    this._pane &&
      de(i).forEach((e) => {
        e !== '' &&
          this._appliedPanelClasses.indexOf(e) === -1 &&
          (this._appliedPanelClasses.push(e), this._pane.classList.add(e));
      });
  }
  _clearPanelClasses() {
    this._pane &&
      (this._appliedPanelClasses.forEach((i) => {
        this._pane.classList.remove(i);
      }),
      (this._appliedPanelClasses = []));
  }
  _getOriginRect() {
    let i = this._origin;
    if (i instanceof O) return i.nativeElement.getBoundingClientRect();
    if (i instanceof Element) return i.getBoundingClientRect();
    let e = i.width || 0,
      t = i.height || 0;
    return { top: i.y, bottom: i.y + t, left: i.x, right: i.x + e, height: t, width: e };
  }
};
function ie(n, i) {
  for (let e in i) i.hasOwnProperty(e) && (n[e] = i[e]);
  return n;
}
function Ki(n) {
  if (typeof n != 'number' && n != null) {
    let [i, e] = n.split(Xn);
    return !e || e === 'px' ? parseFloat(i) : null;
  }
  return n || null;
}
function $i(n) {
  return {
    top: Math.floor(n.top),
    right: Math.floor(n.right),
    bottom: Math.floor(n.bottom),
    left: Math.floor(n.left),
    width: Math.floor(n.width),
    height: Math.floor(n.height),
  };
}
function Gn(n, i) {
  return n === i
    ? !0
    : n.isOriginClipped === i.isOriginClipped &&
        n.isOriginOutsideView === i.isOriginOutsideView &&
        n.isOverlayClipped === i.isOverlayClipped &&
        n.isOverlayOutsideView === i.isOverlayOutsideView;
}
var qi = 'cdk-global-overlay-wrapper';
function _e(n) {
  return new ft();
}
var ft = class {
    _overlayRef;
    _cssPosition = 'static';
    _topOffset = '';
    _bottomOffset = '';
    _alignItems = '';
    _xPosition = '';
    _xOffset = '';
    _width = '';
    _height = '';
    _isDisposed = !1;
    attach(i) {
      let e = i.getConfig();
      (this._overlayRef = i),
        this._width && !e.width && i.updateSize({ width: this._width }),
        this._height && !e.height && i.updateSize({ height: this._height }),
        i.hostElement.classList.add(qi),
        (this._isDisposed = !1);
    }
    top(i = '') {
      return (
        (this._bottomOffset = ''), (this._topOffset = i), (this._alignItems = 'flex-start'), this
      );
    }
    left(i = '') {
      return (this._xOffset = i), (this._xPosition = 'left'), this;
    }
    bottom(i = '') {
      return (
        (this._topOffset = ''), (this._bottomOffset = i), (this._alignItems = 'flex-end'), this
      );
    }
    right(i = '') {
      return (this._xOffset = i), (this._xPosition = 'right'), this;
    }
    start(i = '') {
      return (this._xOffset = i), (this._xPosition = 'start'), this;
    }
    end(i = '') {
      return (this._xOffset = i), (this._xPosition = 'end'), this;
    }
    width(i = '') {
      return this._overlayRef ? this._overlayRef.updateSize({ width: i }) : (this._width = i), this;
    }
    height(i = '') {
      return (
        this._overlayRef ? this._overlayRef.updateSize({ height: i }) : (this._height = i), this
      );
    }
    centerHorizontally(i = '') {
      return this.left(i), (this._xPosition = 'center'), this;
    }
    centerVertically(i = '') {
      return this.top(i), (this._alignItems = 'center'), this;
    }
    apply() {
      if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
      let i = this._overlayRef.overlayElement.style,
        e = this._overlayRef.hostElement.style,
        t = this._overlayRef.getConfig(),
        { width: o, height: r, maxWidth: s, maxHeight: l } = t,
        c = (o === '100%' || o === '100vw') && (!s || s === '100%' || s === '100vw'),
        u = (r === '100%' || r === '100vh') && (!l || l === '100%' || l === '100vh'),
        d = this._xPosition,
        p = this._xOffset,
        I = this._overlayRef.getConfig().direction === 'rtl',
        k = '',
        S = '',
        M = '';
      c
        ? (M = 'flex-start')
        : d === 'center'
        ? ((M = 'center'), I ? (S = p) : (k = p))
        : I
        ? d === 'left' || d === 'end'
          ? ((M = 'flex-end'), (k = p))
          : (d === 'right' || d === 'start') && ((M = 'flex-start'), (S = p))
        : d === 'left' || d === 'start'
        ? ((M = 'flex-start'), (k = p))
        : (d === 'right' || d === 'end') && ((M = 'flex-end'), (S = p)),
        (i.position = this._cssPosition),
        (i.marginLeft = c ? '0' : k),
        (i.marginTop = u ? '0' : this._topOffset),
        (i.marginBottom = this._bottomOffset),
        (i.marginRight = c ? '0' : S),
        (e.justifyContent = M),
        (e.alignItems = u ? 'flex-start' : this._alignItems);
    }
    dispose() {
      if (this._isDisposed || !this._overlayRef) return;
      let i = this._overlayRef.overlayElement.style,
        e = this._overlayRef.hostElement,
        t = e.style;
      e.classList.remove(qi),
        (t.justifyContent =
          t.alignItems =
          i.marginTop =
          i.marginBottom =
          i.marginLeft =
          i.marginRight =
          i.position =
            ''),
        (this._overlayRef = null),
        (this._isDisposed = !0);
    }
  },
  sn = (() => {
    class n {
      _injector = a(_);
      constructor() {}
      global() {
        return _e();
      }
      flexibleConnectedTo(e) {
        return rn(this._injector, e);
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = h({ token: n, factory: n.ɵfac, providedIn: 'root' });
    }
    return n;
  })();
function mt(n, i) {
  n.get(Ae).load(on);
  let e = n.get(_t),
    t = n.get(v),
    o = n.get(X),
    r = n.get(be),
    s = n.get(ee),
    l = t.createElement('div'),
    c = t.createElement('div');
  (c.id = o.getId('cdk-overlay-')),
    c.classList.add('cdk-overlay-pane'),
    l.appendChild(c),
    e.getContainerElement().appendChild(l);
  let u = new qe(c, r, n),
    d = new ue(i),
    p = n.get(re, null, { optional: !0 }) || n.get(L).createRenderer(null, null);
  return (
    (d.direction = d.direction || s.value),
    new fe(
      u,
      l,
      c,
      d,
      n.get(b),
      n.get(tn),
      t,
      n.get(Di),
      n.get(nn),
      i?.disableAnimations ?? n.get(We, null, { optional: !0 }) === 'NoopAnimations',
      n.get(oe),
      p
    )
  );
}
var an = (() => {
  class n {
    scrollStrategies = a(Ji);
    _positionBuilder = a(sn);
    _injector = a(_);
    constructor() {}
    create(e) {
      return mt(this._injector, e);
    }
    position() {
      return this._positionBuilder;
    }
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵprov = h({ token: n, factory: n.ɵfac, providedIn: 'root' });
  }
  return n;
})();
var Zn = new g('cdk-connected-overlay-scroll-strategy', {
  providedIn: 'root',
  factory: () => {
    let n = a(_);
    return () => pt(n);
  },
});
function Kn(n) {
  let i = a(_);
  return () => pt(i);
}
var $n = { provide: Zn, useFactory: Kn },
  Me = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵmod = C({ type: n });
      static ɵinj = y({ providers: [an, $n], imports: [U, q, Xt, Xt] });
    }
    return n;
  })();
function qn(n, i) {}
var G = class {
  viewContainerRef;
  injector;
  id;
  role = 'dialog';
  panelClass = '';
  hasBackdrop = !0;
  backdropClass = '';
  disableClose = !1;
  closePredicate;
  width = '';
  height = '';
  minWidth;
  minHeight;
  maxWidth;
  maxHeight;
  positionStrategy;
  data = null;
  direction;
  ariaDescribedBy = null;
  ariaLabelledBy = null;
  ariaLabel = null;
  ariaModal = !1;
  autoFocus = 'first-tabbable';
  restoreFocus = !0;
  scrollStrategy;
  closeOnNavigation = !0;
  closeOnDestroy = !0;
  closeOnOverlayDetachments = !0;
  disableAnimations = !1;
  providers;
  container;
  templateContext;
};
var qt = (() => {
    class n extends ce {
      _elementRef = a(O);
      _focusTrapFactory = a(Wt);
      _config;
      _interactivityChecker = a(Ht);
      _ngZone = a(b);
      _focusMonitor = a(Ii);
      _renderer = a(re);
      _changeDetectorRef = a(It);
      _injector = a(_);
      _platform = a(E);
      _document = a(v);
      _portalOutlet;
      _focusTrapped = new f();
      _focusTrap = null;
      _elementFocusedBeforeDialogWasOpened = null;
      _closeInteractionType = null;
      _ariaLabelledByQueue = [];
      _isDestroyed = !1;
      constructor() {
        super(),
          (this._config = a(G, { optional: !0 }) || new G()),
          this._config.ariaLabelledBy &&
            this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
      }
      _addAriaLabelledBy(e) {
        this._ariaLabelledByQueue.push(e), this._changeDetectorRef.markForCheck();
      }
      _removeAriaLabelledBy(e) {
        let t = this._ariaLabelledByQueue.indexOf(e);
        t > -1 && (this._ariaLabelledByQueue.splice(t, 1), this._changeDetectorRef.markForCheck());
      }
      _contentAttached() {
        this._initializeFocusTrap(), this._captureInitialFocus();
      }
      _captureInitialFocus() {
        this._trapFocus();
      }
      ngOnDestroy() {
        this._focusTrapped.complete(), (this._isDestroyed = !0), this._restoreFocus();
      }
      attachComponentPortal(e) {
        this._portalOutlet.hasAttached();
        let t = this._portalOutlet.attachComponentPortal(e);
        return this._contentAttached(), t;
      }
      attachTemplatePortal(e) {
        this._portalOutlet.hasAttached();
        let t = this._portalOutlet.attachTemplatePortal(e);
        return this._contentAttached(), t;
      }
      attachDomPortal = (e) => {
        this._portalOutlet.hasAttached();
        let t = this._portalOutlet.attachDomPortal(e);
        return this._contentAttached(), t;
      };
      _recaptureFocus() {
        this._containsFocus() || this._trapFocus();
      }
      _forceFocus(e, t) {
        this._interactivityChecker.isFocusable(e) ||
          ((e.tabIndex = -1),
          this._ngZone.runOutsideAngular(() => {
            let o = () => {
                r(), s(), e.removeAttribute('tabindex');
              },
              r = this._renderer.listen(e, 'blur', o),
              s = this._renderer.listen(e, 'mousedown', o);
          })),
          e.focus(t);
      }
      _focusByCssSelector(e, t) {
        let o = this._elementRef.nativeElement.querySelector(e);
        o && this._forceFocus(o, t);
      }
      _trapFocus(e) {
        this._isDestroyed ||
          V(
            () => {
              let t = this._elementRef.nativeElement;
              switch (this._config.autoFocus) {
                case !1:
                case 'dialog':
                  this._containsFocus() || t.focus(e);
                  break;
                case !0:
                case 'first-tabbable':
                  this._focusTrap?.focusInitialElement(e) || this._focusDialogContainer(e);
                  break;
                case 'first-heading':
                  this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]', e);
                  break;
                default:
                  this._focusByCssSelector(this._config.autoFocus, e);
                  break;
              }
              this._focusTrapped.next();
            },
            { injector: this._injector }
          );
      }
      _restoreFocus() {
        let e = this._config.restoreFocus,
          t = null;
        if (
          (typeof e == 'string'
            ? (t = this._document.querySelector(e))
            : typeof e == 'boolean'
            ? (t = e ? this._elementFocusedBeforeDialogWasOpened : null)
            : e && (t = e),
          this._config.restoreFocus && t && typeof t.focus == 'function')
        ) {
          let o = Qe(),
            r = this._elementRef.nativeElement;
          (!o || o === this._document.body || o === r || r.contains(o)) &&
            (this._focusMonitor
              ? (this._focusMonitor.focusVia(t, this._closeInteractionType),
                (this._closeInteractionType = null))
              : t.focus());
        }
        this._focusTrap && this._focusTrap.destroy();
      }
      _focusDialogContainer(e) {
        this._elementRef.nativeElement.focus?.(e);
      }
      _containsFocus() {
        let e = this._elementRef.nativeElement,
          t = Qe();
        return e === t || e.contains(t);
      }
      _initializeFocusTrap() {
        this._platform.isBrowser &&
          ((this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement)),
          this._document && (this._elementFocusedBeforeDialogWasOpened = Qe()));
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵcmp = R({
        type: n,
        selectors: [['cdk-dialog-container']],
        viewQuery: function (t, o) {
          if ((t & 1 && kt(Oe, 7), t & 2)) {
            let r;
            xt((r = Mt())) && (o._portalOutlet = r.first);
          }
        },
        hostAttrs: ['tabindex', '-1', 1, 'cdk-dialog-container'],
        hostVars: 6,
        hostBindings: function (t, o) {
          t & 2 &&
            $('id', o._config.id || null)('role', o._config.role)(
              'aria-modal',
              o._config.ariaModal
            )('aria-labelledby', o._config.ariaLabel ? null : o._ariaLabelledByQueue[0])(
              'aria-label',
              o._config.ariaLabel
            )('aria-describedby', o._config.ariaDescribedBy || null);
        },
        features: [z],
        decls: 1,
        vars: 0,
        consts: [['cdkPortalOutlet', '']],
        template: function (t, o) {
          t & 1 && Xe(0, qn, 0, 0, 'ng-template', 0);
        },
        dependencies: [Oe],
        styles: [
          `.cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}
`,
        ],
        encapsulation: 2,
      });
    }
    return n;
  })(),
  Te = class {
    overlayRef;
    config;
    componentInstance;
    componentRef;
    containerInstance;
    disableClose;
    closed = new f();
    backdropClick;
    keydownEvents;
    outsidePointerEvents;
    id;
    _detachSubscription;
    constructor(i, e) {
      (this.overlayRef = i),
        (this.config = e),
        (this.disableClose = e.disableClose),
        (this.backdropClick = i.backdropClick()),
        (this.keydownEvents = i.keydownEvents()),
        (this.outsidePointerEvents = i.outsidePointerEvents()),
        (this.id = e.id),
        this.keydownEvents.subscribe((t) => {
          t.keyCode === 27 &&
            !this.disableClose &&
            !ot(t) &&
            (t.preventDefault(), this.close(void 0, { focusOrigin: 'keyboard' }));
        }),
        this.backdropClick.subscribe(() => {
          !this.disableClose && this._canClose()
            ? this.close(void 0, { focusOrigin: 'mouse' })
            : this.containerInstance._recaptureFocus?.();
        }),
        (this._detachSubscription = i.detachments().subscribe(() => {
          e.closeOnOverlayDetachments !== !1 && this.close();
        }));
    }
    close(i, e) {
      if (this._canClose(i)) {
        let t = this.closed;
        (this.containerInstance._closeInteractionType = e?.focusOrigin || 'program'),
          this._detachSubscription.unsubscribe(),
          this.overlayRef.dispose(),
          t.next(i),
          t.complete(),
          (this.componentInstance = this.containerInstance = null);
      }
    }
    updatePosition() {
      return this.overlayRef.updatePosition(), this;
    }
    updateSize(i = '', e = '') {
      return this.overlayRef.updateSize({ width: i, height: e }), this;
    }
    addPanelClass(i) {
      return this.overlayRef.addPanelClass(i), this;
    }
    removePanelClass(i) {
      return this.overlayRef.removePanelClass(i), this;
    }
    _canClose(i) {
      let e = this.config;
      return (
        !!this.containerInstance &&
        (!e.closePredicate || e.closePredicate(i, e, this.componentInstance))
      );
    }
  },
  Qn = new g('DialogScrollStrategy', {
    providedIn: 'root',
    factory: () => {
      let n = a(_);
      return () => pe(n);
    },
  }),
  Jn = new g('DialogData'),
  eo = new g('DefaultDialogConfig');
function to(n) {
  let i = F(n),
    e = new T();
  return {
    valueSignal: i,
    get value() {
      return i();
    },
    change: e,
    ngOnDestroy() {
      e.complete();
    },
  };
}
var Qt = (() => {
  class n {
    _injector = a(_);
    _defaultOptions = a(eo, { optional: !0 });
    _parentDialog = a(n, { optional: !0, skipSelf: !0 });
    _overlayContainer = a(_t);
    _idGenerator = a(X);
    _openDialogsAtThisLevel = [];
    _afterAllClosedAtThisLevel = new f();
    _afterOpenedAtThisLevel = new f();
    _ariaHiddenElements = new Map();
    _scrollStrategy = a(Qn);
    get openDialogs() {
      return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
    }
    get afterOpened() {
      return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
    }
    afterAllClosed = ze(() =>
      this.openDialogs.length
        ? this._getAfterAllClosed()
        : this._getAfterAllClosed().pipe(Z(void 0))
    );
    constructor() {}
    open(e, t) {
      let o = this._defaultOptions || new G();
      (t = D(D({}, o), t)),
        (t.id = t.id || this._idGenerator.getId('cdk-dialog-')),
        t.id && this.getDialogById(t.id);
      let r = this._getOverlayConfig(t),
        s = mt(this._injector, r),
        l = new Te(s, t),
        c = this._attachContainer(s, l, t);
      if (((l.containerInstance = c), !this.openDialogs.length)) {
        let u = this._overlayContainer.getContainerElement();
        c._focusTrapped
          ? c._focusTrapped.pipe(j(1)).subscribe(() => {
              this._hideNonDialogContentFromAssistiveTechnology(u);
            })
          : this._hideNonDialogContentFromAssistiveTechnology(u);
      }
      return (
        this._attachDialogContent(e, l, c, t),
        this.openDialogs.push(l),
        l.closed.subscribe(() => this._removeOpenDialog(l, !0)),
        this.afterOpened.next(l),
        l
      );
    }
    closeAll() {
      $t(this.openDialogs, (e) => e.close());
    }
    getDialogById(e) {
      return this.openDialogs.find((t) => t.id === e);
    }
    ngOnDestroy() {
      $t(this._openDialogsAtThisLevel, (e) => {
        e.config.closeOnDestroy === !1 && this._removeOpenDialog(e, !1);
      }),
        $t(this._openDialogsAtThisLevel, (e) => e.close()),
        this._afterAllClosedAtThisLevel.complete(),
        this._afterOpenedAtThisLevel.complete(),
        (this._openDialogsAtThisLevel = []);
    }
    _getOverlayConfig(e) {
      let t = new ue({
        positionStrategy: e.positionStrategy || _e().centerHorizontally().centerVertically(),
        scrollStrategy: e.scrollStrategy || this._scrollStrategy(),
        panelClass: e.panelClass,
        hasBackdrop: e.hasBackdrop,
        direction: e.direction,
        minWidth: e.minWidth,
        minHeight: e.minHeight,
        maxWidth: e.maxWidth,
        maxHeight: e.maxHeight,
        width: e.width,
        height: e.height,
        disposeOnNavigation: e.closeOnNavigation,
        disableAnimations: e.disableAnimations,
      });
      return e.backdropClass && (t.backdropClass = e.backdropClass), t;
    }
    _attachContainer(e, t, o) {
      let r = o.injector || o.viewContainerRef?.injector,
        s = [
          { provide: G, useValue: o },
          { provide: Te, useValue: t },
          { provide: fe, useValue: e },
        ],
        l;
      o.container
        ? typeof o.container == 'function'
          ? (l = o.container)
          : ((l = o.container.type), s.push(...o.container.providers(o)))
        : (l = qt);
      let c = new ae(
        l,
        o.viewContainerRef,
        _.create({ parent: r || this._injector, providers: s })
      );
      return e.attach(c).instance;
    }
    _attachDialogContent(e, t, o, r) {
      if (e instanceof ye) {
        let s = this._createInjector(r, t, o, void 0),
          l = { $implicit: r.data, dialogRef: t };
        r.templateContext &&
          (l = D(
            D({}, l),
            typeof r.templateContext == 'function' ? r.templateContext() : r.templateContext
          )),
          o.attachTemplatePortal(new le(e, null, l, s));
      } else {
        let s = this._createInjector(r, t, o, this._injector),
          l = o.attachComponentPortal(new ae(e, r.viewContainerRef, s));
        (t.componentRef = l), (t.componentInstance = l.instance);
      }
    }
    _createInjector(e, t, o, r) {
      let s = e.injector || e.viewContainerRef?.injector,
        l = [
          { provide: Jn, useValue: e.data },
          { provide: Te, useValue: t },
        ];
      return (
        e.providers &&
          (typeof e.providers == 'function'
            ? l.push(...e.providers(t, e, o))
            : l.push(...e.providers)),
        e.direction &&
          (!s || !s.get(ee, null, { optional: !0 })) &&
          l.push({ provide: ee, useValue: to(e.direction) }),
        _.create({ parent: s || r, providers: l })
      );
    }
    _removeOpenDialog(e, t) {
      let o = this.openDialogs.indexOf(e);
      o > -1 &&
        (this.openDialogs.splice(o, 1),
        this.openDialogs.length ||
          (this._ariaHiddenElements.forEach((r, s) => {
            r ? s.setAttribute('aria-hidden', r) : s.removeAttribute('aria-hidden');
          }),
          this._ariaHiddenElements.clear(),
          t && this._getAfterAllClosed().next()));
    }
    _hideNonDialogContentFromAssistiveTechnology(e) {
      if (e.parentElement) {
        let t = e.parentElement.children;
        for (let o = t.length - 1; o > -1; o--) {
          let r = t[o];
          r !== e &&
            r.nodeName !== 'SCRIPT' &&
            r.nodeName !== 'STYLE' &&
            !r.hasAttribute('aria-live') &&
            (this._ariaHiddenElements.set(r, r.getAttribute('aria-hidden')),
            r.setAttribute('aria-hidden', 'true'));
        }
      }
    }
    _getAfterAllClosed() {
      let e = this._parentDialog;
      return e ? e._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
    }
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵprov = h({ token: n, factory: n.ɵfac, providedIn: 'root' });
  }
  return n;
})();
function $t(n, i) {
  let e = n.length;
  for (; e--; ) i(n[e]);
}
var cn = (() => {
  class n {
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵmod = C({ type: n });
    static ɵinj = y({ providers: [Qt], imports: [Me, q, Yt, q] });
  }
  return n;
})();
var io = new g('MATERIAL_ANIMATIONS');
var dn = null;
function no() {
  return a(io, { optional: !0 })?.animationsDisabled || a(We, { optional: !0 }) === 'NoopAnimations'
    ? 'di-disabled'
    : ((dn ??= a(it).matchMedia('(prefers-reduced-motion)').matches),
      dn ? 'reduced-motion' : 'enabled');
}
function Jt() {
  return no() !== 'enabled';
}
var ei = (() => {
  class n {
    constructor() {
      a(nt)._applyBodyHighContrastModeCssClasses();
    }
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵmod = C({ type: n });
    static ɵinj = y({ imports: [U, U] });
  }
  return n;
})();
function oo(n, i) {}
var Pe = class {
    viewContainerRef;
    injector;
    id;
    role = 'dialog';
    panelClass = '';
    hasBackdrop = !0;
    backdropClass = '';
    disableClose = !1;
    closePredicate;
    width = '';
    height = '';
    minWidth;
    minHeight;
    maxWidth;
    maxHeight;
    position;
    data = null;
    direction;
    ariaDescribedBy = null;
    ariaLabelledBy = null;
    ariaLabel = null;
    ariaModal = !1;
    autoFocus = 'first-tabbable';
    restoreFocus = !0;
    delayFocusTrap = !0;
    scrollStrategy;
    closeOnNavigation = !0;
    enterAnimationDuration;
    exitAnimationDuration;
  },
  ti = 'mdc-dialog--open',
  hn = 'mdc-dialog--opening',
  un = 'mdc-dialog--closing',
  ro = 150,
  so = 75,
  _n = (() => {
    class n extends qt {
      _animationStateChanged = new T();
      _animationsEnabled = !Jt();
      _actionSectionCount = 0;
      _hostElement = this._elementRef.nativeElement;
      _enterAnimationDuration = this._animationsEnabled
        ? pn(this._config.enterAnimationDuration) ?? ro
        : 0;
      _exitAnimationDuration = this._animationsEnabled
        ? pn(this._config.exitAnimationDuration) ?? so
        : 0;
      _animationTimer = null;
      _contentAttached() {
        super._contentAttached(), this._startOpenAnimation();
      }
      _startOpenAnimation() {
        this._animationStateChanged.emit({
          state: 'opening',
          totalTime: this._enterAnimationDuration,
        }),
          this._animationsEnabled
            ? (this._hostElement.style.setProperty(fn, `${this._enterAnimationDuration}ms`),
              this._requestAnimationFrame(() => this._hostElement.classList.add(hn, ti)),
              this._waitForAnimationToComplete(
                this._enterAnimationDuration,
                this._finishDialogOpen
              ))
            : (this._hostElement.classList.add(ti),
              Promise.resolve().then(() => this._finishDialogOpen()));
      }
      _startExitAnimation() {
        this._animationStateChanged.emit({
          state: 'closing',
          totalTime: this._exitAnimationDuration,
        }),
          this._hostElement.classList.remove(ti),
          this._animationsEnabled
            ? (this._hostElement.style.setProperty(fn, `${this._exitAnimationDuration}ms`),
              this._requestAnimationFrame(() => this._hostElement.classList.add(un)),
              this._waitForAnimationToComplete(
                this._exitAnimationDuration,
                this._finishDialogClose
              ))
            : Promise.resolve().then(() => this._finishDialogClose());
      }
      _updateActionSectionCount(e) {
        (this._actionSectionCount += e), this._changeDetectorRef.markForCheck();
      }
      _finishDialogOpen = () => {
        this._clearAnimationClasses(), this._openAnimationDone(this._enterAnimationDuration);
      };
      _finishDialogClose = () => {
        this._clearAnimationClasses(),
          this._animationStateChanged.emit({
            state: 'closed',
            totalTime: this._exitAnimationDuration,
          });
      };
      _clearAnimationClasses() {
        this._hostElement.classList.remove(hn, un);
      }
      _waitForAnimationToComplete(e, t) {
        this._animationTimer !== null && clearTimeout(this._animationTimer),
          (this._animationTimer = setTimeout(t, e));
      }
      _requestAnimationFrame(e) {
        this._ngZone.runOutsideAngular(() => {
          typeof requestAnimationFrame == 'function' ? requestAnimationFrame(e) : e();
        });
      }
      _captureInitialFocus() {
        this._config.delayFocusTrap || this._trapFocus();
      }
      _openAnimationDone(e) {
        this._config.delayFocusTrap && this._trapFocus(),
          this._animationStateChanged.next({ state: 'opened', totalTime: e });
      }
      ngOnDestroy() {
        super.ngOnDestroy(), this._animationTimer !== null && clearTimeout(this._animationTimer);
      }
      attachComponentPortal(e) {
        let t = super.attachComponentPortal(e);
        return t.location.nativeElement.classList.add('mat-mdc-dialog-component-host'), t;
      }
      static ɵfac = (() => {
        let e;
        return function (o) {
          return (e || (e = K(n)))(o || n);
        };
      })();
      static ɵcmp = R({
        type: n,
        selectors: [['mat-dialog-container']],
        hostAttrs: ['tabindex', '-1', 1, 'mat-mdc-dialog-container', 'mdc-dialog'],
        hostVars: 10,
        hostBindings: function (t, o) {
          t & 2 &&
            (Ee('id', o._config.id),
            $('aria-modal', o._config.ariaModal)('role', o._config.role)(
              'aria-labelledby',
              o._config.ariaLabel ? null : o._ariaLabelledByQueue[0]
            )('aria-label', o._config.ariaLabel)(
              'aria-describedby',
              o._config.ariaDescribedBy || null
            ),
            Tt('_mat-animation-noopable', !o._animationsEnabled)(
              'mat-mdc-dialog-container-with-actions',
              o._actionSectionCount > 0
            ));
        },
        features: [z],
        decls: 3,
        vars: 0,
        consts: [
          [1, 'mat-mdc-dialog-inner-container', 'mdc-dialog__container'],
          [1, 'mat-mdc-dialog-surface', 'mdc-dialog__surface'],
          ['cdkPortalOutlet', ''],
        ],
        template: function (t, o) {
          t & 1 && (H(0, 'div', 0)(1, 'div', 1), Xe(2, oo, 0, 0, 'ng-template', 2), W()());
        },
        dependencies: [Oe],
        styles: [
          `.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mat-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;box-sizing:border-box;min-height:52px;margin:0;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}
`,
        ],
        encapsulation: 2,
      });
    }
    return n;
  })(),
  fn = '--mat-dialog-transition-duration';
function pn(n) {
  return n == null
    ? null
    : typeof n == 'number'
    ? n
    : n.endsWith('ms')
    ? Re(n.substring(0, n.length - 2))
    : n.endsWith('s')
    ? Re(n.substring(0, n.length - 1)) * 1e3
    : n === '0'
    ? 0
    : null;
}
var Ie = (function (n) {
    return (
      (n[(n.OPEN = 0)] = 'OPEN'),
      (n[(n.CLOSING = 1)] = 'CLOSING'),
      (n[(n.CLOSED = 2)] = 'CLOSED'),
      n
    );
  })(Ie || {}),
  ne = class {
    _ref;
    _config;
    _containerInstance;
    componentInstance;
    componentRef;
    disableClose;
    id;
    _afterOpened = new f();
    _beforeClosed = new f();
    _result;
    _closeFallbackTimeout;
    _state = Ie.OPEN;
    _closeInteractionType;
    constructor(i, e, t) {
      (this._ref = i),
        (this._config = e),
        (this._containerInstance = t),
        (this.disableClose = e.disableClose),
        (this.id = i.id),
        i.addPanelClass('mat-mdc-dialog-panel'),
        t._animationStateChanged
          .pipe(
            P((o) => o.state === 'opened'),
            j(1)
          )
          .subscribe(() => {
            this._afterOpened.next(), this._afterOpened.complete();
          }),
        t._animationStateChanged
          .pipe(
            P((o) => o.state === 'closed'),
            j(1)
          )
          .subscribe(() => {
            clearTimeout(this._closeFallbackTimeout), this._finishDialogClose();
          }),
        i.overlayRef.detachments().subscribe(() => {
          this._beforeClosed.next(this._result),
            this._beforeClosed.complete(),
            this._finishDialogClose();
        }),
        di(
          this.backdropClick(),
          this.keydownEvents().pipe(P((o) => o.keyCode === 27 && !this.disableClose && !ot(o)))
        ).subscribe((o) => {
          this.disableClose ||
            (o.preventDefault(), mn(this, o.type === 'keydown' ? 'keyboard' : 'mouse'));
        });
    }
    close(i) {
      let e = this._config.closePredicate;
      (e && !e(i, this._config, this.componentInstance)) ||
        ((this._result = i),
        this._containerInstance._animationStateChanged
          .pipe(
            P((t) => t.state === 'closing'),
            j(1)
          )
          .subscribe((t) => {
            this._beforeClosed.next(i),
              this._beforeClosed.complete(),
              this._ref.overlayRef.detachBackdrop(),
              (this._closeFallbackTimeout = setTimeout(
                () => this._finishDialogClose(),
                t.totalTime + 100
              ));
          }),
        (this._state = Ie.CLOSING),
        this._containerInstance._startExitAnimation());
    }
    afterOpened() {
      return this._afterOpened;
    }
    afterClosed() {
      return this._ref.closed;
    }
    beforeClosed() {
      return this._beforeClosed;
    }
    backdropClick() {
      return this._ref.backdropClick;
    }
    keydownEvents() {
      return this._ref.keydownEvents;
    }
    updatePosition(i) {
      let e = this._ref.config.positionStrategy;
      return (
        i && (i.left || i.right)
          ? i.left
            ? e.left(i.left)
            : e.right(i.right)
          : e.centerHorizontally(),
        i && (i.top || i.bottom)
          ? i.top
            ? e.top(i.top)
            : e.bottom(i.bottom)
          : e.centerVertically(),
        this._ref.updatePosition(),
        this
      );
    }
    updateSize(i = '', e = '') {
      return this._ref.updateSize(i, e), this;
    }
    addPanelClass(i) {
      return this._ref.addPanelClass(i), this;
    }
    removePanelClass(i) {
      return this._ref.removePanelClass(i), this;
    }
    getState() {
      return this._state;
    }
    _finishDialogClose() {
      (this._state = Ie.CLOSED),
        this._ref.close(this._result, { focusOrigin: this._closeInteractionType }),
        (this.componentInstance = null);
    }
  };
function mn(n, i, e) {
  return (n._closeInteractionType = i), n.close(e);
}
var gt = new g('MatMdcDialogData'),
  gn = new g('mat-mdc-dialog-default-options'),
  vn = new g('mat-mdc-dialog-scroll-strategy', {
    providedIn: 'root',
    factory: () => {
      let n = a(_);
      return () => pe(n);
    },
  }),
  Fe = (() => {
    class n {
      _defaultOptions = a(gn, { optional: !0 });
      _scrollStrategy = a(vn);
      _parentDialog = a(n, { optional: !0, skipSelf: !0 });
      _idGenerator = a(X);
      _injector = a(_);
      _dialog = a(Qt);
      _animationsDisabled = Jt();
      _openDialogsAtThisLevel = [];
      _afterAllClosedAtThisLevel = new f();
      _afterOpenedAtThisLevel = new f();
      dialogConfigClass = Pe;
      _dialogRefConstructor;
      _dialogContainerType;
      _dialogDataToken;
      get openDialogs() {
        return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
      }
      get afterOpened() {
        return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
      }
      _getAfterAllClosed() {
        let e = this._parentDialog;
        return e ? e._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
      }
      afterAllClosed = ze(() =>
        this.openDialogs.length
          ? this._getAfterAllClosed()
          : this._getAfterAllClosed().pipe(Z(void 0))
      );
      constructor() {
        (this._dialogRefConstructor = ne),
          (this._dialogContainerType = _n),
          (this._dialogDataToken = gt);
      }
      open(e, t) {
        let o;
        (t = D(D({}, this._defaultOptions || new Pe()), t)),
          (t.id = t.id || this._idGenerator.getId('mat-mdc-dialog-')),
          (t.scrollStrategy = t.scrollStrategy || this._scrollStrategy());
        let r = this._dialog.open(
          e,
          Le(D({}, t), {
            positionStrategy: _e(this._injector).centerHorizontally().centerVertically(),
            disableClose: !0,
            closePredicate: void 0,
            closeOnDestroy: !1,
            closeOnOverlayDetachments: !1,
            disableAnimations:
              this._animationsDisabled ||
              t.enterAnimationDuration?.toLocaleString() === '0' ||
              t.exitAnimationDuration?.toString() === '0',
            container: {
              type: this._dialogContainerType,
              providers: () => [
                { provide: this.dialogConfigClass, useValue: t },
                { provide: G, useValue: t },
              ],
            },
            templateContext: () => ({ dialogRef: o }),
            providers: (s, l, c) => (
              (o = new this._dialogRefConstructor(s, t, c)),
              o.updatePosition(t?.position),
              [
                { provide: this._dialogContainerType, useValue: c },
                { provide: this._dialogDataToken, useValue: l.data },
                { provide: this._dialogRefConstructor, useValue: o },
              ]
            ),
          })
        );
        return (
          (o.componentRef = r.componentRef),
          (o.componentInstance = r.componentInstance),
          this.openDialogs.push(o),
          this.afterOpened.next(o),
          o.afterClosed().subscribe(() => {
            let s = this.openDialogs.indexOf(o);
            s > -1 &&
              (this.openDialogs.splice(s, 1),
              this.openDialogs.length || this._getAfterAllClosed().next());
          }),
          o
        );
      }
      closeAll() {
        this._closeDialogs(this.openDialogs);
      }
      getDialogById(e) {
        return this.openDialogs.find((t) => t.id === e);
      }
      ngOnDestroy() {
        this._closeDialogs(this._openDialogsAtThisLevel),
          this._afterAllClosedAtThisLevel.complete(),
          this._afterOpenedAtThisLevel.complete();
      }
      _closeDialogs(e) {
        let t = e.length;
        for (; t--; ) e[t].close();
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = h({ token: n, factory: n.ɵfac, providedIn: 'root' });
    }
    return n;
  })();
var ao = (() => {
    class n {
      _dialogRef = a(ne, { optional: !0 });
      _elementRef = a(O);
      _dialog = a(Fe);
      constructor() {}
      ngOnInit() {
        this._dialogRef || (this._dialogRef = lo(this._elementRef, this._dialog.openDialogs)),
          this._dialogRef &&
            Promise.resolve().then(() => {
              this._onAdd();
            });
      }
      ngOnDestroy() {
        this._dialogRef?._containerInstance &&
          Promise.resolve().then(() => {
            this._onRemove();
          });
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵdir = A({ type: n });
    }
    return n;
  })(),
  ii = (() => {
    class n extends ao {
      id = a(X).getId('mat-mdc-dialog-title-');
      _onAdd() {
        this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id);
      }
      _onRemove() {
        this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id);
      }
      static ɵfac = (() => {
        let e;
        return function (o) {
          return (e || (e = K(n)))(o || n);
        };
      })();
      static ɵdir = A({
        type: n,
        selectors: [
          ['', 'mat-dialog-title', ''],
          ['', 'matDialogTitle', ''],
        ],
        hostAttrs: [1, 'mat-mdc-dialog-title', 'mdc-dialog__title'],
        hostVars: 1,
        hostBindings: function (t, o) {
          t & 2 && Ee('id', o.id);
        },
        inputs: { id: 'id' },
        exportAs: ['matDialogTitle'],
        features: [z],
      });
    }
    return n;
  })(),
  ni = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵdir = A({
        type: n,
        selectors: [
          ['', 'mat-dialog-content', ''],
          ['mat-dialog-content'],
          ['', 'matDialogContent', ''],
        ],
        hostAttrs: [1, 'mat-mdc-dialog-content', 'mdc-dialog__content'],
        features: [vi([Yi])],
      });
    }
    return n;
  })();
function lo(n, i) {
  let e = n.nativeElement.parentElement;
  for (; e && !e.classList.contains('mat-mdc-dialog-container'); ) e = e.parentElement;
  return e ? i.find((t) => t.id === e.id) : null;
}
var Ne = (() => {
  class n {
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵmod = C({ type: n });
    static ɵinj = y({ providers: [Fe], imports: [cn, Me, q, ei, ei] });
  }
  return n;
})();
function uo(n, i) {
  if ((n & 1 && (H(0, 'a', 4), se(1), W()), n & 2)) {
    let e = i.$implicit;
    Ot('href', e.href, Ye), N(), Ei(' ', e.name, ' ');
  }
}
var me = class me {
  constructor(i, e) {
    this._dialogRef = i;
    this._data = e;
    this.getData = F(null);
  }
  ngOnInit() {
    this.getData.set(this._data);
  }
  closeModal() {
    return this._dialogRef.close();
  }
};
(me.ɵfac = function (e) {
  return new (e || me)(Et(ne), Et(gt));
}),
  (me.ɵcmp = R({
    type: me,
    selectors: [['app-dialog-projects']],
    decls: 12,
    vars: 2,
    consts: [
      ['mat-dialog-title', ''],
      [3, 'click'],
      ['src', 'assets/icons/dialog/close.svg', 'alt', 'Bot\xE3o para fechar o dialog'],
      [3, 'innerHTML'],
      ['target', '_blank', 1, 'btn', 'btn-primary', 3, 'href'],
    ],
    template: function (e, t) {
      if (
        (e & 1 &&
          (H(0, 'header')(1, 'h2', 0),
          se(2),
          W(),
          H(3, 'button', 1),
          At('click', function () {
            return t.closeModal();
          }),
          St(4, 'img', 2),
          W()(),
          H(5, 'mat-dialog-content')(6, 'h3'),
          se(7, 'Descri\xE7\xE3o'),
          W(),
          St(8, 'article', 3),
          H(9, 'nav'),
          Ze(10, uo, 2, 2, 'a', 4, Ge),
          W()()),
        e & 2)
      ) {
        let o, r, s;
        N(2),
          wi((o = t.getData()) == null ? null : o.title),
          N(6),
          Ot('innerHTML', (r = t.getData()) == null ? null : r.description, gi),
          N(2),
          Ke((s = t.getData()) == null ? null : s.links);
      }
    },
    dependencies: [Ne, ii, ni],
    styles: [
      '.dialog-container-projects .mdc-dialog__container{width:850px}[_nghost-%COMP%]{padding:10px 30px;display:flex;flex-direction:column}[_nghost-%COMP%]   header[_ngcontent-%COMP%], [_nghost-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   p[_ngcontent-%COMP%], [_nghost-%COMP%]   mat-dialog-content[_ngcontent-%COMP%]{padding:0;margin:0 0 15px}[_nghost-%COMP%]   header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:22px;padding:0;margin:0;color:var(--black-010)}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;padding:0;cursor:pointer}[_nghost-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;color:var(--black-010)}[_nghost-%COMP%]   article[_ngcontent-%COMP%]{margin-bottom:15px}[_nghost-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]{display:flex}',
    ],
  }));
var vt = me;
function fo(n, i) {
  if (n & 1) {
    let e = yi();
    Ce(0, 'li')(1, 'button', 1),
      bi('click', function () {
        let o = ui(e).$implicit,
          r = Ci();
        return fi(r.openDialog(o));
      }),
      Rt(2, 'img', 2),
      we()();
  }
  if (n & 2) {
    let e = i.$implicit;
    N(2), Ee('src', e.src, Ye)('alt', e.alt), $('width', e.width)('height', e.height);
  }
}
var yt,
  ge = class ge {
    constructor() {
      si(this, yt, a(Fe));
      this.arrayProjects = F([
        {
          src: 'assets/img/projects/vfull.png',
          alt: 'Projeto ElizIA',
          title: 'ElizIA',
          width: '100px',
          height: '51px',
          description:
            'Intelig\xEAncia artificial voltada para os idosos, com p\xE1ginas de lembretes de rem\xE9dios, jogos, noticias e muito mais...',
          links: [
            {
              name: 'Conhe\xE7a o Site',
              href: 'https://github.com/Tvg2005/AmigoVirtual/tree/noticia',
            },
          ],
        },
        {
          src: 'assets/img/projects/vfull2.png',
          alt: 'Projeto LaHen',
          title: 'Lahen Dolce',
          width: '100px',
          height: '51px',
          description: 'A sua confeitaria afetiva',
          links: [{ name: 'Conhe\xE7a o Site', href: 'https://lahen.com.br/' }],
        },
      ]);
    }
    openDialog(i) {
      ri(this, yt).open(vt, { data: i, panelClass: 'dialog-container-projects' });
    }
  };
(yt = new WeakMap()),
  (ge.ɵfac = function (e) {
    return new (e || ge)();
  }),
  (ge.ɵcmp = R({
    type: ge,
    selectors: [['app-projects']],
    decls: 6,
    vars: 0,
    consts: [
      [1, 'container'],
      [3, 'click'],
      ['loading', 'lazy', 3, 'src', 'alt'],
    ],
    template: function (e, t) {
      e & 1 &&
        (Ce(0, 'div', 0)(1, 'h2'),
        se(2, 'Projetos desenvolvidos'),
        we(),
        Ce(3, 'ul'),
        Ze(4, fo, 3, 4, 'li', null, Ge),
        we()()),
        e & 2 && (N(4), Ke(t.arrayProjects()));
    },
    dependencies: [Ne],
    styles: [
      '[_nghost-%COMP%]{margin-top:25px;padding:25px 0;display:flex;justify-content:center;align-items:center;flex-direction:column;background:var(--black-010)}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;margin:0 0 25px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:20px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:20%;width:160px;height:160px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:100%;cursor:pointer;background:var(--black-010);border:2px solid var(--primary);border-radius:7px;transition:.5s}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:var(--primary)}@media (max-width: 750px){[_nghost-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex:100%}}',
    ],
  }));
var yn = ge;
export { yn as Projects };
