#!/usr/bin/env bats

load test_helpers

setup() {
  setup_asdf_dir
  install_mock_plugin_repo "dummy"
  run asdf plugin add "dummy" "${BASE_DIR}/repo-dummy"
}

teardown() {
  clean_asdf_dir
}

@test "asdf plugin-update should pull latest default branch (refs/remotes/origin/HEAD) for plugin" {
  run asdf plugin-update dummy
  repo_head="$(git --git-dir "$ASDF_DIR/plugins/dummy/.git" --work-tree "$ASDF_DIR/plugins/dummy" rev-parse --abbrev-ref HEAD)"
  [ "$status" -eq 0 ]
  [[ "$output" =~ "Updating dummy to master"* ]]
  [ "$repo_head" = "master" ]
}

@test "asdf plugin-update should pull latest default branch (refs/remotes/origin/HEAD) for plugin even if default branch changes" {
  install_mock_plugin_repo "dummy-remote"
  remote_dir="$BASE_DIR/repo-dummy-remote"
  # set HEAD to refs/head/main in dummy-remote
  git -C "${remote_dir}" checkout -b main
  # track & fetch remote repo (dummy-remote) in plugin (dummy)
  git --git-dir "$ASDF_DIR/plugins/dummy/.git" --work-tree "$ASDF_DIR/plugins/dummy" remote remove origin
  git --git-dir "$ASDF_DIR/plugins/dummy/.git" --work-tree "$ASDF_DIR/plugins/dummy" remote add origin "$remote_dir"
  git --git-dir "$ASDF_DIR/plugins/dummy/.git" --work-tree "$ASDF_DIR/plugins/dummy" fetch origin

  run asdf plugin-update dummy
  repo_head="$(git --git-dir "$ASDF_DIR/plugins/dummy/.git" --work-tree "$ASDF_DIR/plugins/dummy" rev-parse --abbrev-ref HEAD)"

  [ "$status" -eq 0 ]
  [[ "$output" =~ "Updating dummy to main"* ]]
  [ "$repo_head" = "main" ]
}

@test "asdf plugin-update should pull latest default branch (refs/remotes/origin/HEAD) for plugin even if the default branch contains a forward slash" {
  install_mock_plugin_repo "dummy-remote"
  remote_dir="$BASE_DIR/repo-dummy-remote"
  # set HEAD to refs/head/my/default in dummy-remote
  git -C "${remote_dir}" checkout -b my/default
  # track & fetch remote repo (dummy-remote) in plugin (dummy)
  git --git-dir "$ASDF_DIR/plugins/dummy/.git" --work-tree "$ASDF_DIR/plugins/dummy" remote remove origin
  git --git-dir "$ASDF_DIR/plugins/dummy/.git" --work-tree "$ASDF_DIR/plugins/dummy" remote add origin "$remote_dir"
  git --git-dir "$ASDF_DIR/plugins/dummy/.git" --work-tree "$ASDF_DIR/plugins/dummy" fetch origin

  run asdf plugin-update dummy
  repo_head="$(git --git-dir "$ASDF_DIR/plugins/dummy/.git" --work-tree "$ASDF_DIR/plugins/dummy" rev-parse --abbrev-ref HEAD)"

  [ "$status" -eq 0 ]
  [[ "$output" =~ "Updating dummy to my/default"* ]]
  [ "$repo_head" = "my/default" ]
}

@test "asdf plugin-update should pull latest default branch (refs/remotes/origin/HEAD) for plugin even if already set to specific ref" {
  # set plugin to specific sha
  current_sha="$(git --git-dir "${BASE_DIR}/repo-dummy/.git" --work-tree "$BASE_DIR/repo-dummy" rev-parse HEAD)"
  run asdf plugin-update dummy "${current_sha}"

  # setup mock plugin remote
  install_mock_plugin_repo "dummy-remote"
  remote_dir="$BASE_DIR/repo-dummy-remote"
  # set HEAD to refs/head/main in dummy-remote
  git -C "${remote_dir}" checkout -b main
  # track & fetch remote repo (dummy-remote) in plugin (dummy)
  git --git-dir "$ASDF_DIR/plugins/dummy/.git" --work-tree "$ASDF_DIR/plugins/dummy" remote remove origin
  git --git-dir "$ASDF_DIR/plugins/dummy/.git" --work-tree "$ASDF_DIR/plugins/dummy" remote add origin "$remote_dir"
  git --git-dir "$ASDF_DIR/plugins/dummy/.git" --work-tree "$ASDF_DIR/plugins/dummy" fetch origin

  # update plugin to the default branch
  run asdf plugin-update dummy
  repo_head="$(git --git-dir "$ASDF_DIR/plugins/dummy/.git" --work-tree "$ASDF_DIR/plugins/dummy" rev-parse --abbrev-ref HEAD)"

  [ "$status" -eq 0 ]
  [[ "$output" =~ "Updating dummy to main"* ]]
  [ "$repo_head" = "main" ]
}

@test "asdf plugin-update should not remove plugin versions" {
  run asdf install dummy 1.1
  [ "$status" -eq 0 ]
  [ $(cat $ASDF_DIR/installs/dummy/1.1/version) = "1.1" ]
  run asdf plugin-update dummy
  [ "$status" -eq 0 ]
  [ -f $ASDF_DIR/installs/dummy/1.1/version ]
  run asdf plugin-update --all
  [ "$status" -eq 0 ]
  [ -f $ASDF_DIR/installs/dummy/1.1/version ]
}

@test "asdf plugin-update should not remove plugins" {
  # dummy plugin is already installed
  run asdf plugin-update dummy
  [ "$status" -eq 0 ]
  [ -d $ASDF_DIR/plugins/dummy ]
  run asdf plugin-update --all
  [ "$status" -eq 0 ]
  [ -d $ASDF_DIR/plugins/dummy ]
}

@test "asdf plugin-update should not remove shims" {
  run asdf install dummy 1.1
  [ -f $ASDF_DIR/shims/dummy ]
  run asdf plugin-update dummy
  [ "$status" -eq 0 ]
  [ -f $ASDF_DIR/shims/dummy ]
  run asdf plugin-update --all
  [ "$status" -eq 0 ]
  [ -f $ASDF_DIR/shims/dummy ]
}
