# coding=utf-8
from __future__ import absolute_import, unicode_literals
from zope.cachedescriptors.property import Lazy
from gs.viewlet import SiteViewlet


class EmptyViewlet(SiteViewlet):

    @Lazy
    def show(self):
        return False
