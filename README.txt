==============================
``edem.search.topic``
==============================
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
E-Democracy customization of topic search
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:Author: `Bill Bushey`_
:Contact: Bill Bushey <bill.bushey@e-democracy.org>
:Date: 2014-07-21
:Organization: `E-Democracy`_
:Copyright: This document is licensed under a
  `Creative Commons Attribution-Share Alike 3.0 License`_
  by `E-Democracy`_.

Introduction
===========

This egg overrides parts of `GroupServer`_'s topic search system provided by
`gs.search.topic`_. Currently, it modifies the topics listing on the site 
homepage so that the default listing only displays topics form the groups a 
user is a member of, if the user is a logged in user.

Resources
=========

- Code repository: https://github.com/e-democracy/edem.search.topic
- Questions and comments to http://groupserver.org/groups/development
- Report bugs at https://redmine.iopen.net/projects/edem

.. _E-Democracy: http://e-democracy.org/
.. _Bill Bushey: http://groupserver.org/p/wbushey
.. _GroupServer: http://groupserver.org/
.. _gs.search.topic: https://source.iopen.net/groupserver/gs.search.topic/
.. _Creative Commons Attribution-Share Alike 3.0 License:
   http://creativecommons.org/licenses/by-sa/3.0/
