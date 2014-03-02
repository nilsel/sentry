from django.utils.decorators import method_decorator

from sentry.api.base import Endpoint
from sentry.models import Group, GroupBookmark
from sentry.web.decorators import has_access

from rest_framework.response import Response


class GroupBookmarkEndpoint(Endpoint):
    @method_decorator(has_access)
    def post(self, request, team, project, group_id):
        group = Group.objects.get(
            id=group_id,
            project=project,
        )

        bookmark = GroupBookmark()
        bookmark.project = project
        bookmark.group = group
        bookmark.user = request.user

        bookmark.save()

        return Response()
