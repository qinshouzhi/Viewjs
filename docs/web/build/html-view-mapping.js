var htmlViewMapping = {
	"index": [],
	"doc": [
		"doc_what-is-spa",
		"doc_impl-spa",
		"doc_spa-advantage-disadvantage",
		"doc_what-is-viewjs",
		"doc_how-to-use",
		"doc_application",
		"doc_what-is-viewport",
		"doc_default-viewport",
		"doc_active-viewport",
		"doc_pseudo-viewport",
		"doc_viewport-group",
		"doc_viewport-container",
		"doc_event-drive",
		"doc_os-detect",
		"doc_logger-output",
		"doc_viewport-configuration",
		"doc_viewport-context",
		"doc_viewjs-initializer",
		"doc_viewport-layout",
		"doc_viewport-title",
		"doc_viewport-directly-accessible",
		"doc_fallback-viewport",
		"doc_viewport-navigation",
		"doc_identify-browser-action",
		"doc_viewport-parameter",
		"doc_viewport-option",
		"doc_viewport-animation",
		"doc_query-element",
		"doc_notice",
		"doc_license",
		"doc_best-practise",
		"doc_contact-me",
		"doc_faq",
	],
	"attr": [
		"attr_data-view",
		"attr_data-view-default",
		"attr_data-view-group",
		"attr_data-view-container",
		"attr_data-view-directly-accessible",
		"attr_data-view-fallback",
		"attr_data-view-rel",
		"attr_data-view-rel-disabled",
		"attr_data-view-rel-type",
		"attr_data-view-title",
		"attr_data-view-os"
	],
	"evt": [
		"evt_View-beforechange",
		"evt_View-afterchange",
		"evt_View-instance-ready",
		"evt_View-instance-beforeenter",
		"evt_View-instance-enter",
		"evt_View-instance-afterenter",
		"evt_View-instance-leave",
	],
	"api": [
		"api_View-ofId",
		"api_View-ifExists",
		"api_View-listAll",
		"api_View-listAllGroups",
		"api_View-setAsDefault",
		"api_View-isDirectlyAccessible",
		"api_View-setIsDirectlyAccessible",
		"api_View-getActiveView",
		"api_View-getDefaultView",
		"api_View-setSwitchAnimation",
		"api_View-getSwitchAnimation",
		"api_View-getActiveViewOptions",
		"api_View-hasActiveViewOption",
		"api_View-getActiveViewOption",
		"api_View-setActiveViewOption",
		"api_View-implIsPortrait",
		"api_View-navTo",
		"api_View-changeTo",
		"api_View-back",
		"api_View-forward",
		"api_View-setDocumentTitle",
		"api_View-onceHistoryBack",
		"api_View-beforeInit",
		"api_View-ready",
		"api_View-setInitializer",
		"api_View-on",
		"api_View-off",
		"api_View-fire",
		"api_View-attrs",
		"api_View-instance-on",
		"api_View-instance-off",
		"api_View-instance-fire",
		"api_View-instance-getLatestEventData",
		"api_View-instance-getContext",
		"api_View-instance-clearContext",
		"api_View-instance-getId",
		"api_View-instance-getDomElement",
		"api_View-instance-find",
		"api_View-instance-findAll",
		"api_View-instance-setLayoutAction",
		"api_View-instance-getLayoutAction",
		"api_View-instance-hasParameter",
		"api_View-instance-getParameter",
		"api_View-instance-seekParameter",
		"api_View-instance-isReady",
		"api_View-instance-isActive",
		"api_View-instance-isDefault",
		"api_View-instance-isDirectlyAccessible",
		"api_View-instance-setAsDirectlyAccessible",
		"api_View-instance-setTitle",
		"api_View-instance-getTitle",
		"api_View-instance-setFallbackViewId",
		"api_View-instance-getFallbackView",
		"api_View-instance-attrs",
		"api_ViewConfigurationSet-instance-has",
		"api_ViewConfigurationSet-instance-get",
		"api_ViewConfigurationSet-instance-applyAll",
		"api_ViewConfigurationSet-instance-listAll",
		"api_ViewConfiguration-instance-getName",
		"api_ViewConfiguration-instance-getValue",
		"api_ViewConfiguration-instance-setValue",
		"api_ViewConfiguration-instance-getApplication",
		"api_ViewConfiguration-instance-setApplication",
		"api_ViewConfiguration-instance-apply",
		"api_ViewConfiguration-instance-reflectToDom",
		"api_ViewContext-instance-has",
		"api_ViewContext-instance-set",
		"api_ViewContext-instance-get",
		"api_ViewContext-instance-remove",
		"api_ViewContext-instance-clear",
		"api_Logger-ofName",
		"api_Logger-isGloballyEnabled",
		"api_Logger-setIsGloballyEnabled",
		"api_Logger-instance-isEnabled",
		"api_Logger-instance-setIsEnabled",
		"api_Logger-instance-getName",
		"api_Logger-instance-debug",
		"api_Logger-instance-info",
		"api_Logger-instance-warn",
		"api_Logger-instance-error",
		"api_Logger-instance-log",
		"api_layout-getLayoutWidth",
		"api_layout-getLayoutHeight",
		"api_layout-getBrowserWidth",
		"api_layout-getBrowserHeight",
		"api_layout-isLayoutPortrait",
		"api_layout-isLayoutLandscape",
		"api_layout-isBrowserPortrait",
		"api_layout-isBrowserLandscape",
		"api_layout-getLayoutWidthHeightRatio",
		"api_layout-getBrowserWidthHeightRatio",
		"api_layout-getExpectedWidthHeightRatio",
		"api_layout-setExpectedWidthHeightRatio",
		"api_layout-init",
		"api_layout-doLayout",
		"api_layout-addLayoutChangeListener",
		"api_layout-removeLayoutChangeListener",
	]
};

htmlViewMapping["doc-sp"] = htmlViewMapping.doc;

module.exports = htmlViewMapping;