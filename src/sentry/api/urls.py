from django.conf.urls import patterns, url

from .endpoints.group_index import GroupIndexEndpoint
from .endpoints.group_details import GroupDetailsEndpoint

urlpatterns = patterns(
    '',
    url(r'^(?P<team_slug>[^\/]+)/(?P<project_id>[^\/]+)/groups/$',
        GroupIndexEndpoint.as_view(),
        name='sentry-api-0-group-list'),
    url(r'^(?P<team_slug>[^\/]+)/(?P<project_id>[^\/]+)/groups/(?P<group_id>\d+)/$',
        GroupDetailsEndpoint.as_view(),
        name='sentry-api-0-group-details'),
    # url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
)
