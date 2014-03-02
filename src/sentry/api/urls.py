from django.conf.urls import patterns, url

from .endpoints.group_index import GroupIndexEndpoint
from .endpoints.group_details import GroupDetailsEndpoint
from .endpoints.group_resolve import GroupResolveEndpoint
from .endpoints.group_bookmark import GroupBookmarkEndpoint
from .endpoints.group_markseen import GroupMarkSeenEndpoint
from .endpoints.group_delete import GroupDeleteEndpoint

urlpatterns = patterns(
    '',
    url(r'^(?P<team_slug>[^\/]+)/(?P<project_id>[^\/]+)/groups/$',
        GroupIndexEndpoint.as_view(),
        name='sentry-api-0-group-list'),
    url(r'^(?P<team_slug>[^\/]+)/(?P<project_id>[^\/]+)/groups/(?P<group_id>\d+)/$',
        GroupDetailsEndpoint.as_view(),
        name='sentry-api-0-group-details'),
    url(r'^(?P<team_slug>[^\/]+)/(?P<project_id>[^\/]+)/groups/(?P<group_id>\d+)/resolve/$',
        GroupResolveEndpoint.as_view(),
        name='sentry-api-0-group-resolve'),
    url(r'^(?P<team_slug>[^\/]+)/(?P<project_id>[^\/]+)/groups/(?P<group_id>\d+)/bookmark/$',
        GroupBookmarkEndpoint.as_view(),
        name='sentry-api-0-group-bookmark'),
    url(r'^(?P<team_slug>[^\/]+)/(?P<project_id>[^\/]+)/groups/(?P<group_id>\d+)/markseen/$',
        GroupMarkSeenEndpoint.as_view(),
        name='sentry-api-0-group-markseen'),
    url(r'^(?P<team_slug>[^\/]+)/(?P<project_id>[^\/]+)/groups/(?P<group_id>\d+)/delete/$',
        GroupDeleteEndpoint.as_view(),
        name='sentry-api-0-group-delete'),
    # url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
)
