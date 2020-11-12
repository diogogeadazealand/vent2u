'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">semester-project documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-f0022570585513ce3e53d18c21d8f282"' : 'data-target="#xs-components-links-module-AppModule-f0022570585513ce3e53d18c21d8f282"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f0022570585513ce3e53d18c21d8f282"' :
                                            'id="xs-components-links-module-AppModule-f0022570585513ce3e53d18c21d8f282"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LogoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotInUseModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotInUseModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-3e14f1740b0e2eb26cb6201f7dd1bbda"' : 'data-target="#xs-components-links-module-AuthModule-3e14f1740b0e2eb26cb6201f7dd1bbda"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-3e14f1740b0e2eb26cb6201f7dd1bbda"' :
                                            'id="xs-components-links-module-AuthModule-3e14f1740b0e2eb26cb6201f7dd1bbda"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link">AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClaimGridModule.html" data-type="entity-link">ClaimGridModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClaimGridModule-2b02d228998de4de70056e7655e3e999"' : 'data-target="#xs-components-links-module-ClaimGridModule-2b02d228998de4de70056e7655e3e999"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClaimGridModule-2b02d228998de4de70056e7655e3e999"' :
                                            'id="xs-components-links-module-ClaimGridModule-2b02d228998de4de70056e7655e3e999"' }>
                                            <li class="link">
                                                <a href="components/ClaimGridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClaimGridComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClassModule.html" data-type="entity-link">ClassModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClassModule-2748dbe57c0cea981e2405b81a1698e4"' : 'data-target="#xs-components-links-module-ClassModule-2748dbe57c0cea981e2405b81a1698e4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClassModule-2748dbe57c0cea981e2405b81a1698e4"' :
                                            'id="xs-components-links-module-ClassModule-2748dbe57c0cea981e2405b81a1698e4"' }>
                                            <li class="link">
                                                <a href="components/ClassComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClassComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StudentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudentsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StudentsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ClassModule-2748dbe57c0cea981e2405b81a1698e4"' : 'data-target="#xs-injectables-links-module-ClassModule-2748dbe57c0cea981e2405b81a1698e4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ClassModule-2748dbe57c0cea981e2405b81a1698e4"' :
                                        'id="xs-injectables-links-module-ClassModule-2748dbe57c0cea981e2405b81a1698e4"' }>
                                        <li class="link">
                                            <a href="injectables/StudentsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>StudentsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VentService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>VentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-2c648e068ecb39087b25a85ccb69bb3a"' : 'data-target="#xs-components-links-module-DashboardModule-2c648e068ecb39087b25a85ccb69bb3a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-2c648e068ecb39087b25a85ccb69bb3a"' :
                                            'id="xs-components-links-module-DashboardModule-2c648e068ecb39087b25a85ccb69bb3a"' }>
                                            <li class="link">
                                                <a href="components/ClaimComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClaimComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavigationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-DashboardModule-2c648e068ecb39087b25a85ccb69bb3a"' : 'data-target="#xs-pipes-links-module-DashboardModule-2c648e068ecb39087b25a85ccb69bb3a"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-DashboardModule-2c648e068ecb39087b25a85ccb69bb3a"' :
                                            'id="xs-pipes-links-module-DashboardModule-2c648e068ecb39087b25a85ccb69bb3a"' }>
                                            <li class="link">
                                                <a href="pipes/CelsiusPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CelsiusPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HumidityModule.html" data-type="entity-link">HumidityModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HumidityModule-3678d2dd5119863cf056bb7239036625"' : 'data-target="#xs-components-links-module-HumidityModule-3678d2dd5119863cf056bb7239036625"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HumidityModule-3678d2dd5119863cf056bb7239036625"' :
                                            'id="xs-components-links-module-HumidityModule-3678d2dd5119863cf056bb7239036625"' }>
                                            <li class="link">
                                                <a href="components/HumidityComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HumidityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HumiditySlider.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HumiditySlider</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OHumidityComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OHumidityComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OHumidityModule.html" data-type="entity-link">OHumidityModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OHumidityModule-586e98c8ce6afc1532022a35d6b68bc2"' : 'data-target="#xs-components-links-module-OHumidityModule-586e98c8ce6afc1532022a35d6b68bc2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OHumidityModule-586e98c8ce6afc1532022a35d6b68bc2"' :
                                            'id="xs-components-links-module-OHumidityModule-586e98c8ce6afc1532022a35d6b68bc2"' }>
                                            <li class="link">
                                                <a href="components/OHumidityComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OHumidityComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OHumidityModule-586e98c8ce6afc1532022a35d6b68bc2"' : 'data-target="#xs-injectables-links-module-OHumidityModule-586e98c8ce6afc1532022a35d6b68bc2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OHumidityModule-586e98c8ce6afc1532022a35d6b68bc2"' :
                                        'id="xs-injectables-links-module-OHumidityModule-586e98c8ce6afc1532022a35d6b68bc2"' }>
                                        <li class="link">
                                            <a href="injectables/WeatherService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>WeatherService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OTempModule.html" data-type="entity-link">OTempModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OTempModule-734145f80ebd7befec73f519e1d53eb8"' : 'data-target="#xs-components-links-module-OTempModule-734145f80ebd7befec73f519e1d53eb8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OTempModule-734145f80ebd7befec73f519e1d53eb8"' :
                                            'id="xs-components-links-module-OTempModule-734145f80ebd7befec73f519e1d53eb8"' }>
                                            <li class="link">
                                                <a href="components/OTempComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OTempComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OTempModule-734145f80ebd7befec73f519e1d53eb8"' : 'data-target="#xs-injectables-links-module-OTempModule-734145f80ebd7befec73f519e1d53eb8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OTempModule-734145f80ebd7befec73f519e1d53eb8"' :
                                        'id="xs-injectables-links-module-OTempModule-734145f80ebd7befec73f519e1d53eb8"' }>
                                        <li class="link">
                                            <a href="injectables/WeatherService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>WeatherService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PresetsModule.html" data-type="entity-link">PresetsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PresetsModule-084a29d7a2dfeaaf351f8a756b49a53c"' : 'data-target="#xs-components-links-module-PresetsModule-084a29d7a2dfeaaf351f8a756b49a53c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PresetsModule-084a29d7a2dfeaaf351f8a756b49a53c"' :
                                            'id="xs-components-links-module-PresetsModule-084a29d7a2dfeaaf351f8a756b49a53c"' }>
                                            <li class="link">
                                                <a href="components/PresetsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PresetsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TemperatureModule.html" data-type="entity-link">TemperatureModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TemperatureModule-0c1f548b127bb7f36ae065d06309ab33"' : 'data-target="#xs-components-links-module-TemperatureModule-0c1f548b127bb7f36ae065d06309ab33"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TemperatureModule-0c1f548b127bb7f36ae065d06309ab33"' :
                                            'id="xs-components-links-module-TemperatureModule-0c1f548b127bb7f36ae065d06309ab33"' }>
                                            <li class="link">
                                                <a href="components/DashboardSlider.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardSlider</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OTempComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OTempComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemperatureComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TemperatureComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudentsService.html" data-type="entity-link">StudentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VentService.html" data-type="entity-link">VentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WeatherService.html" data-type="entity-link">WeatherService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});