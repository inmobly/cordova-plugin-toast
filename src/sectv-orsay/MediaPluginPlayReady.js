/*
 * Copyright 2015 Samsung Electronics Co., Ltd.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var exec = require('cordova/exec'),
	MediaPlugin = require('cordova-plugin-toast.MediaPlugin');

var PLAYREADY_CUSTOM_DATA = 3,
	PLAYREADY_LICENSE_SERVER = 4;

function MediaPluginPlayReady () {
	MediaPlugin.apply(this, arguments);
	this.name = 'MediaPluginPlayReady';
}

MediaPluginPlayReady.prototype = new MediaPlugin();

MediaPluginPlayReady.prototype.onAttachToMedia = function (media) {
	var me = this;
	if(this.options.CustomData){
		media.registerHook('afterplay', function (media, args) {
			exec(null, null, 'toast.Media', 'setDrm', [
				'SetPlayerProperty',
				PLAYREADY_CUSTOM_DATA,
				me.options.CustomData,
				me.options.CustomData.length
			]);
		});
	}

	if(this.options.LicenseServer){
		media.registerHook('afterplay', function (media, args) {
			exec(null, null, 'toast.Media', 'setDrm', [
				'SetPlayerProperty',
				PLAYREADY_LICENSE_SERVER,
				me.options.LicenseServer,
				me.options.LicenseServer.length
			]);
		});
	}
};

module.exports = MediaPluginPlayReady;
